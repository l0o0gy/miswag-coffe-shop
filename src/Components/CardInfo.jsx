import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import CoffeeImage from './CoffeeImage';

export default function CardInfo() {
  const [miswagData, setMiswagData] = useState([]);
  const [favorites, setFavorites] = useState({}); 

  const fetchCoffeeShopData = async () => {
    try {
      const response = await axios.get(
        'https://file.notion.so/f/f/f9a09310-af94-4993-bbca-d051d7b65e1d/2dd59431-7382-4f93-9625-fece6ad64e7d/coffee.json?table=block&id=1118d471-7c66-80c3-81e4-d43d01799cc0&spaceId=f9a09310-af94-4993-bbca-d051d7b65e1d&expirationTimestamp=1728086400000&signature=7jUTlW0BNWpApd-IzAKgTce2SqDKr-fj1syWyaf7h3I&downloadName=coffee.json'
      );
      return response.data.data;
    } catch (err) {
      console.error('Error fetching data:', err);
      return [];
    }
  };

  const toggleFavorite = (id) => {
    const updatedFavorites = { ...favorites, [id]: !favorites[id] };
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCoffeeShopData();
      setMiswagData(data);
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
      setFavorites(storedFavorites);
    };

    loadData();
  }, []);

  return (
    <>
      {miswagData.length > 0 ? (
        <div className='m-5 mt-1 md:ml-20 md:mr-20 flex justify-center'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4'>
            {miswagData.map((data) => (
              <div key={data.id} className='bg-amber-100 p-3 h-auto rounded-xl shadow-lg flex flex-col'>
                <Box
                  sx={{
                    height: { xs: '100px', md: '300px' },
                    maxWidth: '500px',
                    overflow: 'hidden',
                    borderRadius: 2,
                  }}
                >
                  <CoffeeImage id={data.id} />
                </Box>
                <h1 className='font-bold text-lg mt-2'>{data.name}</h1>
                <p className='text-sm md:text-base mt-2 line-clamp-3'>{data.description}</p>
                <Stack sx={{ mt: 'auto' }}>
                  <div className='md:flex md:justify-between items-center pt-4'>
                    <p className='font-semibold text-sm md:text-lg mb-1 md:mb-0'>{data.price} IQD</p>
                    <div className='flex space-x-2'>
                      <Link
                        to={`/miswagcoffee/${data.id}/${data.name}`}
                        state={{ data }}
                        style={{ textDecoration: 'none' }}
                      >
                        <button className='bg-orange-500 hover:bg-orange-600 w-25 md:w-40 md:h-10 rounded-lg p-2 text-xs md:text-base text-white shadow-md'>
                          More Details
                        </button>
                      </Link>
                      <Box
                        sx={{
                          padding: 1,
                          borderRadius: 20,
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                          height: { xs: '30px', md: 'auto' },
                          width: { xs: '30px', md: 'auto' },
                        }}
                        onClick={() => toggleFavorite(data.id)}
                      >
                        {favorites[data.id] ? (
                          <FavoriteIcon
                            sx={{
                              marginTop: { xs: '-10px', md: 'auto' },
                              marginLeft: { xs: '-5px', md: 'auto' },
                              color: 'orange',
                            }}
                          />
                        ) : (
                          <FavoriteBorderIcon
                            sx={{
                              marginTop: { xs: '-10px', md: 'auto' },
                              marginLeft: { xs: '-5px', md: 'auto' },
                            }}
                          />
                        )}
                      </Box>
                    </div>
                  </div>
                </Stack>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='flex justify-center'>
          <p className='text-gray-600'>No products found.</p>
        </div>
      )}
    </>
  );
}


