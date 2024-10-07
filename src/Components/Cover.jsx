import React, { useEffect } from 'react';
import cover from '../assets/img/homecover.jpg';
import logo from '../assets/img/whitelogo.png';
import smoke from '../assets/img/giphy.gif';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";



function Cover() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            className='overflow-hidden h-[100vh] w-full'
            style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col items-center justify-center h-screen pb-30 md:pb-0  bg-orange-950 ">

                <LazyLoadImage
                    src={smoke}
                    alt='Smoke Animation'
                    className='w-16  md:w-32 '

                    effect='blur'
                />
                <LazyLoadImage
                    src={logo}
                    alt='Miswag Logo'
                    className=' w-40 md:max-w-[800px] '
                />
            </div>
        </div>
    );
}

export default Cover;
