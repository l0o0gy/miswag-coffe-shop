import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import { useDebounce } from '../Hooks/hook';
import CardInfo from './CardInfo';
import searchlogo from '../assets/img/transparency.png';
import searchcup from '../assets/img/searchcup.png';

function Card() {
    const [miswagData, setMiswagData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            setIsSearching(true);
            try {
                const response = await axios.get('https://file.notion.so/f/f/f9a09310-af94-4993-bbca-d051d7b65e1d/2dd59431-7382-4f93-9625-fece6ad64e7d/coffee.json?table=block&id=1118d471-7c66-80c3-81e4-d43d01799cc0&spaceId=f9a09310-af94-4993-bbca-d051d7b65e1d&expirationTimestamp=1728086400000&signature=7jUTlW0BNWpApd-IzAKgTce2SqDKr-fj1syWyaf7h3I&downloadName=coffee.json');
                const data = response.data.data;

                console.log("Data received:", data);

                const filteredData = data.filter(item =>
                    item.name && item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
                );

                console.log("Filtered Data Length:", filteredData.length);

                setMiswagData(filteredData);
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
                setIsSearching(false);
            }
        };

        if (debouncedSearch) {
            loadProducts();
        } else {
            setMiswagData([]);
        }
    }, [debouncedSearch]);

    return (
        <div>
            <div className='m-5 md:mt-20 flex justify-between md:ml-20 md:mr-20'>
                <h1 className='font-bold md:text-2xl mt-2 text-amber-800'>Products</h1>
                <SearchBar onChange={setSearch} value={search} />
            </div>

            {search === "" ? (
                <CardInfo />
            ) : isSearching ? (
                <div className='flex justify-center mt-10'>
                    <div className='animate-pulse relative w-60 flex justify-center'>
                        <img src={searchlogo} alt='searchlogo' className='search-logo w-32' />
                        <img src={searchcup} alt='searchcup' className='w-56' />
                    </div>
                </div>
            ) : miswagData.length > 0 && (
                miswagData.map((item, index) => (
                    <CardInfo key={index} item={item} />
                ))
            )}
        </div>
    );
}

export default Card;
