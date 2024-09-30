import React from 'react';

function HeroSection() {


    return (
        <div>
            <div 
                className='object-cover ml-5 mr-5 h-60 rounded-xl md:h-80 md:ml-20 md:mr-20 flex overflow-x-hidden items-center relative ' 
            >
                <img src='https://pixabay.com/get/g802e1915ccc17ebeb60e689c6eb6748db7026f7670b7d00be71ab99cf3f0358d3f8fedd572712a03608807a4991aaa68f1c82b8375f8442c6059a0f8166b3c5f_1280.jpg'
                className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}

export default HeroSection;
