import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithubSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='font-serif  p-8'>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:w-3/4 mx-auto '>
                <div className=' lg:relative'>
                    <div className='bg-orange-600 lg:w-3/4 md:p-8 py-4 rounded-t-xl md:rounded-l-xl lg:absolute inset-y-0 right-0'>
                        <div className='text-gray-100 pl-4 m-4'>
                            <h1 className='text-xl py-4'>CONTACT ME</h1>
                            <p className='text-xl py-2'> <FontAwesomeIcon icon={faLocationDot} className='text-3xl pr-2'/> Chottagram , Bangladesh</p>
                            <p className='text-xl py-2'><FontAwesomeIcon icon={faEnvelope} className='text-3xl pr-2' /> mainuddin.dev@gmail.com</p>
                            <p className="text-xl py-2"><FontAwesomeIcon icon={faPhone} className='text-3xl pr-2'/>+8801852902208</p>
                            <div className='mt-8 flex justify-center space-x-3'>
                                <FontAwesomeIcon icon={faFacebookF} className='p-2  rounded text-3xl bg-primary text-white'/>
                                <FontAwesomeIcon icon={faGithubSquare} className='p-2  rounded text-3xl bg-primary text-white'/>
                                <FontAwesomeIcon icon={faTwitter} className='p-2  rounded text-3xl bg-primary text-white'/>
                                <FontAwesomeIcon icon={faLinkedin} className='p-2  rounded text-3xl bg-primary text-white hover:-mt-2 delay-150'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-orange-200 rounded-b-xl md:rounded-r-xl'>
                    <div className='w-3/4 mx-auto'>
                        <h1 className='text-2xl py-4'>Mail me</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true })} placeholder='Your name' className='block w-full my-4 p-2 text-lg rounded' />
                            {errors.name?.type === 'required' && <p className='text-red-500 text-xl'>Please put your name</p>}

                            <input {...register("email", { required: true })} placeholder="Your Email" className='block w-full my-4 p-2 text-lg rounded' />
                            {errors.email && <p className='text-red-500 text-xl my-2'>Please put your email</p>}

                            <textarea {...register("message", { required: true })} placeholder="Message" name="" id="" className='w-full my-4 p-2 text-lg rounded-lg block mx-auto' rows="4"></textarea>
                            {errors.message && <p className='text-red-500 text-xl my-2'> Please write something</p>}
                            <input type="submit" value="Send" className='btn btn-accent mx-auto block my-4 text-white' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;