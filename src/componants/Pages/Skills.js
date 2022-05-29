import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Skills = () => {
    const data = [
        {
            name: 'HTML',
            Skill: 95,
        },
        {
            name: 'CSS3',
            Skill: 85,
        },
        {
            name: 'Bootstrap5',
            Skill: 80,
        },
        {
            name: 'Tailwind',
            Skill: 75,
        },
        {
            name: 'Javascript',
            Skill: 75,
        },

        {
            name: 'React js',
            Skill: 80,
        },
        {
            name: 'Node',
            Skill: 55,
        },
        {
            name: 'Express.js',
            Skill: 50,
        },
        {
            name: 'Mongodb',
            Skill: 50,
        },

    ]

    return (
        <div>
            <h1 className='my-16 text-5xl  text-center'>MY SKILL STATUS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center' >
                <div className=''>
                <ResponsiveContainer width={600} height={450}>
                        <BarChart
                            data={data}
                            margin={{
                                top: 15,
                                right: 30,
                                left: 0,
                                bottom: 5
                            }}
                            barSize={25}
                        >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="Skill" fill="#8884d8" background={{ fill: "#eee" }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <h1 className='text-4xl m-8 font-bold'>This is my Skills Graph</h1>
                    <p className='text-2xl m-8'>I'm improving my skills day by day.For that I have been working heard since when I started.The process will be continued</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;