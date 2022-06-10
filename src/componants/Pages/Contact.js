import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithubSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const form=useRef()
    const onSubmit = () => {
        emailjs.sendForm('service_suzu2fm', 'template_tr98kzh', form.current, '6z7vq4Yv0xgyfP6E0')
      .then((result) => {
          console.log(result.text);
          reset()
      }, (error) => {
          console.log(error.text);
          reset()
      });
    }
    return (
        <div className='font-serif  md:p-8 mx-2 grid place-items-center  my-4 ' >
            <div className='lg:w-3/4 w-full lg:mx-auto mx-4 flex flex-col justify-around  lg:flex-row bg-white'>
                <div className=' pl-4 m-4'>
                    <h1 className='text-xl py-4'>CONTACT ME</h1>
                    <p className='text-xl py-2'> <FontAwesomeIcon icon={faLocationDot} className='text-3xl pr-2' /> Chottagram , Bangladesh</p>
                    <p className='text-xl py-2'><FontAwesomeIcon icon={faEnvelope} className='text-3xl pr-2' /> mainuddin.dev@gmail.com</p>
                    <p className="text-xl py-2"><FontAwesomeIcon icon={faPhone} className='text-3xl pr-2' />+8801852902208</p>
                    <div className='mt-8 flex  space-x-3'>
                        <FontAwesomeIcon icon={faFacebookF} className='py-2 px-4 hover:-mt-2 duration-300 text-primary  rounded text-4xl bg-gray-200 ' />
                        <FontAwesomeIcon icon={faGithubSquare} className='p-2 hover:-mt-2 duration-300 rounded text-4xl bg-gray-200 text-black' />
                        <FontAwesomeIcon icon={faTwitter} className='p-2 hover:-mt-2 duration-300 rounded text-4xl text-primary bg-gray-200' />
                        <FontAwesomeIcon icon={faLinkedin} className='p-2  rounded text-4xl bg-gray-200 text-orange-800 hover:-mt-2 duration-300 ' />
                    </div>
                </div>
                <div class="divider lg:divider-horizontal"></div>
                    <div className='mt-4'>
                        <h1 className='text-2xl py-4 px-2'>Mail me</h1>
                        <form onSubmit={handleSubmit(onSubmit)} ref={form} className="px-2 ">
                            <input {...register("name", { required: true })} placeholder='Your name' className='block md:mx-auto md:w-96  w-full input-bordered  input my-4 p-2 text-lg rounded ' />
                            {errors.name?.type === 'required' && <p className='text-red-500 text-xl md:text-center lg:text-left'>Please put your name</p>}

                            <input {...register("email", { required: true })} placeholder="Your Email" className='block md:mx-auto w-full md:w-96 my-4  input input-bordered p-2 text-lg rounded ' />
                            {errors.email && <p className='text-red-500 text-xl my-2  md:text-center lg:text-left'>Please put your email</p>}

                            <textarea {...register("message", { required:true })} placeholder="Message" className='w-full  md:mx-auto textarea textarea-bordered md:w-96 my-4 p-2 text-lg rounded-lg block ' rows="4"></textarea>
                            {errors.message && <p className='text-red-500 text-xl my-2  md:text-center lg:text-left'> Please write something</p>}
                            <input type="submit" value="Send" className='btn btn-accent mx-auto block my-4 text-white ' />
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default Contact;