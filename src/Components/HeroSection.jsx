import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HeroSection() {
    const [miswagData, setMiswagData] = useState([]); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchCoffeeShopData = async () => {
            try {
                const response = await axios.get(' https://file.notion.so/f/f/f9a09310-af94-4993-bbca-d051d7b65e1d/2dd59431-7382-4f93-9625-fece6ad64e7d/coffee.json?table=block&id=1118d471-7c66-80c3-81e4-d43d01799cc0&spaceId=f9a09310-af94-4993-bbca-d051d7b65e1d&expirationTimestamp=1727798400000&signature=_Xa6tjjGuvojI_857kdprrMl3vSKDsWL-Ko9Dux5Vl4&downloadName=coffee.json');
                setMiswagData(response.data);
                console.log(response.data); 
            } catch (err) {
                setError(err); 
                console.error(err);
            }
        };

        fetchCoffeeShopData();
    }, []);

    return (
        <div>
            <div className='bg-slate-400 rounded-xl h-72 ml-20 mr-20 flex overflow-x-auto'> 
                {miswagData.length > 0 && miswagData.map((data) => (
                    <img 
                        key={data.id}
                        src={data.image} 
                        alt={data.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default HeroSection;
