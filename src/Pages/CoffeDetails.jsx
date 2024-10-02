import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emptycup from '../assets/img/coffee (1).png';
import fullcup from '../assets/img/coffee.png';

function CoffeeDetails() {
    const location = useLocation();
    const { data } = location.state || {};
    const [selectedCup, setSelectedCup] = useState(null);
    const [coffeeCount, setCoffeeCount] = useState(1);

    const handleCupClick = (size) => {
        setSelectedCup(size);
        setCoffeeCount(1);
    };

    const getCupWidth = (size) => {
        switch (size) {
            case 's':
                return 'h-14 md:h-20';
            case 'm':
                return 'h-16 md:h-24';
            case 'l':
                return 'h-20 md:h-28';
            default:
                return 'w-10';
        }
    };

    const incrementCount = () => {
        setCoffeeCount((prev) => prev + 1);
    };

    const decrementCount = () => {
        if (coffeeCount > 1) {
            setCoffeeCount((prev) => prev - 1);
        }
    };

    return (
        <div className="md:flex md:justify-start m-5 mt-0 md:p-5 md:mt-0 md:m-16">
            <img
                src={data.image}
                alt={data.name}
                loading="lazy"
                className="object-cover rounded-lg w-full h-72 md:w-6/12 md:h-96 bg-slate-500"
            />
            <div className="md:pl-10 pt-5 md:pt-0">
                <h1 className='font-bold text-2xl md:text-5xl text-amber-900'>{data.name}</h1>
                <p className='text-sm md:text-xl  line-clamp-3 text-amber-700 text-opacity-80 pt-1 md:pt-5'> Description :</p>
                <p className='text-sm md:text-xl line-clamp-3 text-amber-700 text-opacity-50 pt-1 md:pt-1'>{data.description}</p>
                <p className='text-sm md:text-xl  line-clamp-3 text-current pt-1 text-opacity-50 md:pt-3'>Choose your Fav cup size : </p>

                <div className="flex md:justify-center items-center mt-2 md:mt-2 space-x-4">
                    {['s', 'm', 'l'].map((size) => (
                        <div key={size} className="flex flex-col items-center">
                            <img
                                src={selectedCup === size ? fullcup : emptycup}
                                alt={`Cup ${size}`}
                                onClick={() => handleCupClick(size)}
                                className={`cursor-pointer ${getCupWidth(size)}`}
                            />
                            <p className="mt-1 text-sm">{size.toUpperCase()}</p>
                        </div>
                    ))}
                </div>

                {selectedCup && (
                    <>
                        <div className="flex items-center mt-1">
                            <button
                                onClick={decrementCount}
                                className="bg-orange-500 hover:bg-orange-500 rounded-md   w-7 h-7  text-2xl flex justify-center items-center "
                            >
                                -
                            </button>
                            <span className="mx-4 text-lg">{coffeeCount}</span>
                            <button
                                onClick={incrementCount}
                                className="bg-orange-500 hover:bg-orange-500 rounded-md  w-7 h-7  text-xl"
                            >
                                +
                            </button>
                        </div>

                        <div className='relative h-12 w-40 md:h-9 mt-3'>
                            <p className='font-bold text-xl md:text-3xl text-orange-600'>
                                {(data.price * coffeeCount)} IQD
                            </p>
                        </div>



                        <div className='relative  w-full'>
                            <button className='bg-orange-500 hover:bg-orange-600 absolute bottom-0 right-0 rounded-lg p-2 text-white shadow-md'>
                                Order Online
                            </button>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default CoffeeDetails;
