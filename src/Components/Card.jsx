import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from 'react-router-dom';



function Card() {
    const [miswagData, setMiswagData] = useState([]);

    useEffect(() => {
        const fetchCoffeeShopData = async () => {
            try {
                const response = await axios.get('https://file.notion.so/f/f/f9a09310-af94-4993-bbca-d051d7b65e1d/2dd59431-7382-4f93-9625-fece6ad64e7d/coffee.json?table=block&id=1118d471-7c66-80c3-81e4-d43d01799cc0&spaceId=f9a09310-af94-4993-bbca-d051d7b65e1d&expirationTimestamp=1727798400000&signature=_Xa6tjjGuvojI_857kdprrMl3vSKDsWL-Ko9Dux5Vl4&downloadName=coffee.json');
                setMiswagData(response.data.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchCoffeeShopData();
    }, []);

    return (
        <div className='m-5 md:m-20 flex justify-center'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4'>
                {miswagData.length > 0 && miswagData.map((data) => (
                    <div key={data.id} className='bg-orange-50 p-3 h-auto rounded-xl shadow-lg flex flex-col'>
                        < LazyLoadImage
                            loading='lazy'
                            src={data.image}
                            alt={data.name}
                            className='object-cover h-32 md:h-48 w-full rounded-xl'
                        />
                        <h1 className='font-bold text-lg mt-2'>{data.name}</h1>
                        <p className='text-sm md:text-base mt-2 line-clamp-3'>{data.description}</p>

                        <Stack sx={{ mt: 'auto' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-4">
                                <p className='font-semibold text-base md:text-lg'>${data.price}</p>
                                <div className='flex space-x-2'>
                                <Link to={`/miswagcoffee/${data.id}/${data.name}`} state={{ data}} style={{ textDecoration: 'none'}}>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#ce5706',
                                            '&:hover': {
                                                backgroundColor: '#933e04'
                                            },
                                            fontSize: { xs: 7, md: 13 },
                                            borderRadius: 2,
                                            width: { xs: '90px', md: 'auto' },
                                            height: { xs: '30px', md: 'auto' },
                                        }}
                                    >
                                        More Details
                                    </Button>
                                </Link>
                                    <Box sx={{
                                        padding: 1,
                                        borderRadius: 20,
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        height: { xs: '30px', md: 'auto' },
                                        width: { xs: '30px', md: 'auto' }
                                    }}>
                                        <FavoriteBorderIcon sx={{ marginTop: { xs: '-10px', md: 'auto' }, marginLeft: { xs: '-5px', md: 'auto' } }} />
                                    </Box>
                                </div>
                            </div>
                        </Stack>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
