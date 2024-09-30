import React from 'react';
import logo from '../assets/img/Picsart_24-09-30_16-38-04-777.png';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';

function NavBar() {
    const navItems = ['Store', 'Favorite', 'Blog', 'About'];
    const [isOpen, setIsOpen] = useState(false);
    const onpenDrawer = (open) => () => {
        setIsOpen(open);
    }

    return (
        <nav className="flex items-center md:justify-between p-2  ">
            <div className='md:hidden'>
                <div onClick={onpenDrawer(true)} className='hover:bg-slate-100 hover:rounded-full p-2 '>
                    <MenuIcon />
                </div>
            </div>
            <img src={logo} alt="Miswag Logo" className="w-28 pt-1 md:pt-0 md:w-40  md:ml-20" />

            <div className="hidden md:flex space-x-7 mr-20">
                {navItems.map(item => (
                    <h1 key={item} className="text-amber-900 hover:text-orange-500 font-semibold">
                        {item}
                    </h1>
                ))}
            </div>
            <Drawer anchor="left" open={isOpen} onClose={onpenDrawer(false)}>
                <div className="flex flex-col p-4 w">
                <img src={logo} alt="Miswag Logo" className="w-28 pt-1 " />

                    {navItems.map(item => (
                        <h1 key={item} className="text-amber-900 hover:text-orange-500 font-semibold mb-4 ml-3 mt-5 ">
                            {item}
                        </h1>
                    ))}
                </div>
            </Drawer>
        </nav>
    );
}

export default NavBar;
