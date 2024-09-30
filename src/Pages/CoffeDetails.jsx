import React from 'react';
import { useLocation } from 'react-router-dom';

function CoffeeDetails() {
    const location = useLocation();
    const { data } = location.state || {};

    return (
        <div className="md:flex  md:justify-start m-5 md:p-5 mt-0 md:m-16 ">
            <img
                src={data.image}
                alt={data.name}
                loading="lazy"
                className="object-cover rounded-lg  w-full h-72 md:w-6/12 md:max-h-96 "
            />
            <div className=" md:pl-10 pt-5 md:pt-0">
                <h1 className='font-bold text-2xl md:text-5xl text-amber-900 '>{data.name}</h1>
                <p className='text-sm md:text-xl md:mt-2 line-clamp-3 text-amber-700 pt-1 md:pt-10'>{data.description}</p>
                <div className='relative h-20 w-40 md:h-60 md:w-40  '>
                    <p className='font-bold text-xl md:text-3xl text-orange-600  absolute bottom-0 left-0 h-5 w-2 '>
                        ${data.price}
                    </p>

                </div>
                <div className='relative h-3 w-full'>
                    <button className='bg-orange-500 hover:bg-orange-600 absolute bottom-0 right-0  rounded-lg p-2 text-white shadow-md '>Online Order</button>
                </div>
            </div>
        </div>
    );
}

export default CoffeeDetails;
