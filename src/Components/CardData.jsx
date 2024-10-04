import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CoffeeImage from './CoffeeImage';

function CardData() {
    const [miswagData, setMiswagData] = useState([]);
    const [favorites, setFavorites] = useState({});

    const fetchCoffeeShopData = async () => {
        try {
            const response = await axios.get('https://file.notion.so/f/f/f9a09310-af94-4993-bbca-d051d7b65e1d/2dd59431-7382-4f93-9625-fece6ad64e7d/coffee.json?table=block&id=1118d471-7c66-80c3-81e4-d43d01799cc0&spaceId=f9a09310-af94-4993-bbca-d051d7b65e1d&expirationTimestamp=1728115200000&signature=popitFuaZ_CCnoodfqWYvaCYIHQDJgIj376SZPqDRas&downloadName=coffee.json');
            return response.data.data;
        } catch (err) {
            console.error("Error fetching data:", err);
            return [];
        }
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array;
    };

    useEffect(() => {
        const loadFavorites = () => {
            const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
            setFavorites(storedFavorites);
        };

        const loadData = async () => {
            const data = await fetchCoffeeShopData();
            const shuffledData = shuffleArray(data); 
            const limitedData = shuffledData.slice(0, 10);
            setMiswagData(limitedData);
        };

        loadFavorites();
        loadData();
    }, []);

    const toggleFavorite = (id) => {
        const updatedFavorites = { ...favorites, [id]: !favorites[id] };
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className="m-5 ml-0 mt-0 md:m-1 flex justify-center">
            <div className="flex overflow-x-auto gap-2 md:h-auto">
                {miswagData.map((data) => (
                    <div key={data.id} className="bg-amber-100 p-3 w-32 md:w-36 h-48 md:h-64 rounded-xl shadow-lg flex flex-col">
                        <Box
                            sx={{
                                height: { xs: '100%', md: '100px' },
                                maxWidth: '500px',
                                overflow: 'hidden',
                                borderRadius: 2,
                            }}
                        >
                            <CoffeeImage id={data.id} />
                        </Box>
                        <h1 className="font-bold text-base">{data.name}</h1>
                        <p className="text-sm md:text-sm line-clamp-3 h-10">{data.description}</p>
                        <Stack sx={{ mt: 'auto' }}>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-sm md:text-lg mb-1 md:mb-0">{data.price} IQD</p>
                                <Box
                                    sx={{
                                        padding: 1,
                                        borderRadius: 20,
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        height: '30px',
                                        width: '30px',
                                    }}
                                    onClick={() => toggleFavorite(data.id)}
                                >
                                    {favorites[data.id] ? (
                                        <FavoriteIcon sx={{ marginTop: { xs: '-10px', md: '-11px' }, marginLeft: { xs: '-5px', md: '-5px' }, color: 'orange' }} />
                                    ) : (
                                        <FavoriteBorderIcon sx={{ marginTop: { xs: '-10px', md: '-11px' }, marginLeft: { xs: '-5px', md: '-5px' } }} />
                                    )}
                                </Box>
                            </div>
                        </Stack>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardData;
