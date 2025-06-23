import React from 'react';
import { motion } from "motion/react"
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{
                            y: [0, 50, 0],
                            scale: 1,
                            transition: { duration: 5, repeat: Infinity }
                        }}
                        src={banner1}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl border-s-8 border-b-8 border-primary shadow-2xl"
                    />
                    <motion.img
                        animate={{
                            x: [100, 150, 100],
                            scale: 1,
                            transition: { duration: 10, repeat: Infinity, delay: 5 }
                        }}
                        src={banner2}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl border-s-8 border-b-8 border-primary shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    {/* <motion.h1
                        animate={{
                            rotate: 180,
                            transition: { duration: 4 }
                        }} className="text-5xl font-bold">Latest Jobs for you!</motion.h1> */}
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: { duration: 4 }
                        }} className="text-5xl font-bold">Latest <motion.span animate={{
                            color: ['#ff5733', '#0ee04a', '#6d38fa'],
                            transition: { duration: 2, repeat: Infinity }
                        }}>Jobs </motion.span> for you!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;