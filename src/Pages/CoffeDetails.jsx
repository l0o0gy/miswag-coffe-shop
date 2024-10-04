import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emptycup from '../assets/img/coffee (1).png';
import fullcup from '../assets/img/coffee.png';
import CoffeeImage from '../Components/CoffeeImage';
import { Box } from '@mui/material';
import CardData from '../Components/CardData';
import FormDialog from '../Components/OrderDialog';

function CoffeeDetails() {
    const location = useLocation();
    const { data } = location.state || {};
    const [selectedCup, setSelectedCup] = useState(null);
    const [coffeeCount, setCoffeeCount] = useState(1);
    const [open, setOpen] = useState(false);

    const handleCupClick = (size) => {
        setSelectedCup(size);
        setCoffeeCount(1);
    };

    const getCupWidth = (size) => {
        switch (size) {
            case 's':
                return 'h-14 lg:h-20';
            case 'm':
                return 'h-16 lg:h-24';
            case 'l':
                return 'h-20 lg:h-28';
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

    const coffeePrice = () => {
        let basePrice = data.price * coffeeCount;

        if (selectedCup === 'm') {
            basePrice += 500 * coffeeCount;
        }
        if (selectedCup === 'l') {
            basePrice += 1000 * coffeeCount;
        }

        return basePrice;
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='mb-3 md:mb-10'>
            <div className="md:flex md:justify-start m-5 mt-20 md:p-5  md:m-16 ">
                <div className="object-cover rounded-lg  lg:w-6/12 md:h-96">
                    <Box sx={{ height: { xs: '250px',sm:'350px', lg: '400px' }, maxWidth: '600px', overflow: 'hidden', borderRadius: 2 }}>
                        <CoffeeImage id={data.id} />
                    </Box>
                </div>

                <div className="md:pl-10 pt-0 md:pt-0 "
                >
                    <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl text-amber-900 sm:pt-3'>{data.name}</h1>
                    <p className='text-sm md:text-xl line-clamp-3 text-amber-700 text-opacity-80 pt-1  md:pt-5'> Description :</p>
                    <p className='text-sm sm:text-lg md:text-xl line-clamp-3 text-amber-700 text-opacity-50 pt-1 md:pt-1'>{data.description}</p>
                    <p className='text-sm sm:text-lg md:text-xl line-clamp-3 text-current pt-1 text-opacity-35 md:pt-3'>Please Click on Cup to Choose:</p>

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
                            <div className="flex items-center mt-1 w-full">
                                <button
                                    onClick={decrementCount}
                                    className="bg-orange-500 hover:bg-orange-500 rounded-md w-7 h-7 text-2xl flex justify-center items-center"
                                >
                                    -
                                </button>
                                <span className="mx-4 text-lg">{coffeeCount}</span>
                                <button
                                    onClick={incrementCount}
                                    className="bg-orange-500 hover:bg-orange-500 rounded-md w-7 h-7 text-xl"
                                >
                                    +
                                </button>
                            </div>

                            <div className='relative h-12 w-40 md:h-9 mt-3'>
                                <p className='font-bold text-xl md:text-3xl text-orange-600'>
                                    {coffeePrice()} IQD
                                </p>
                            </div>

                            <div className='relative w-full'>
                                <button
                                    onClick={handleClickOpen}
                                    className='bg-orange-500 hover:bg-orange-600 absolute bottom-0 right-0 rounded-lg p-2 text-white shadow-md'>
                                    Order Online
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <FormDialog
                open={open}
                onClose={handleClose}
                data={data}
                name={data.name}
                selectedCup={selectedCup}
                coffeeCount={coffeeCount}
                coffeePrice={coffeePrice()}
            />
            <div className='m-5 md:mt-20 flex justify-start md:ml-20 md:mr-20'>
                <h1 className='font-bold md:text-2xl mt-2 text-amber-800'>You May Like</h1>
            </div>
            <div className='ml-5 mr-5 h-56 md:h-80 md:ml-20 md:mr-20 flex items-center relative overflow-x-scroll overflow-y-hidden'>
                <div className='flex space-x-4 mt-4 md:mt-1'>
                    <CardData />
                </div>
            </div>
        </div>
    );
}

export default CoffeeDetails;
