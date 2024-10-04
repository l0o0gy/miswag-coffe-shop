import React from 'react';
import video from '../assets/img/coffee.mp4';

function HeroSection() {
    return (
        <div className="relative">
            <div
                className='object-cover  mt-20  md:m-20 ml-5 mr-5 h-40 rounded-xl md:h-80  flex overflow-hidden items-center relative  '
            >
                <video
                    src={video}
                    className="h-full w-full object-cover rounded-xl shadow-inner"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            
            <div className="absolute left-2 md:left-5 bottom-0 md:bottom-2">
                <h1 className="text-white text-base md:text-3xl font-bold mb-2">
                    All Coffee you like and more
                </h1>
            </div>
            </div>
        </div>
    );
}

export default HeroSection;
