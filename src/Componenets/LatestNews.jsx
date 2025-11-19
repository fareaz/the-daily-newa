import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center p-3 bg-base-200 my-5 gap-5'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={75}>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !</p>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !</p>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !</p>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !</p>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;