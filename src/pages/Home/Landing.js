import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl.png'
const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row z-10">
                    <div data-aos="fade-right">
                        <p className='text-xl'>Best Quality</p>
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={bucketGirl} class="max-w-sm w-full" alt='' />
                    </div>
                </div>
            </div>
            <div className='rounded-2xl mt-[-30px] bg-base-200 z-20 relative mx-auto shadow-lg p-10 w-9/12'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get A Quote</button>
            </div>

        </>
    );
};

export default Landing;