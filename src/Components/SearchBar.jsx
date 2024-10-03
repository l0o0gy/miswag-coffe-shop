import React from 'react'
import Search from '../assets/img/searching.png';


export default function SearchBar() {
    return (
        <div>
            <div className='flex justify-start border rounded-xl p-2 w-72'>
                <img src={Search} alt='search-logo' className='w-6 mr-2' />
                <input
                    type="text"
                    placeholder='Search...'
                    // value={searchCoffee}
                    // onChange={handleInputChange}
                />
            </div>
        </div>
    )
}

