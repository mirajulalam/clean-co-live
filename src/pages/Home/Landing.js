import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl.png'
const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
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
            <div>
                <h1>Get Free Estimate
                </h1>
            </div>

        </>
    );
};

export default Landing;