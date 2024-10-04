import React, { useState } from 'react';
import logo from '../assets/img/Picsart_24-09-30_16-38-04-777.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
    const navItems = [
        { title: 'Store', path: '/home' },
        { title: 'Favorite' },
        { title: 'Blog' },
        { title: 'About' }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const openDrawer = (open) => () => {
        setIsOpen(open);
    };

    return (
        <nav className="flex items-center md:justify-between p-2  bg-white shadow-md fixed top-0 left-0 right-0 z-10">
            <div className='md:hidden'>
                <div onClick={openDrawer(true)} className='hover:bg-slate-100 hover:rounded-full p-2'>
                    <MenuIcon />
                </div>
            </div>
            <img src={logo} alt="Miswag Logo" className="w-28 pt-1 md:pt-0 md:w-40 md:ml-16" />

            <div className="hidden md:flex space-x-7 mr-20">
                {navItems.map(item => (
                    <Link to={item.path} key={item.title} style={{ textDecoration: 'none' }}>
                        <h1 className="text-amber-900 hover:text-orange-500 font-semibold">
                            {item.title}
                        </h1>
                    </Link>
                ))}
            </div>

            <Drawer anchor="left" open={isOpen} onClose={openDrawer(false)}>
                <div className="flex flex-col p-4" style={{ width: '250px' }}>
                    <img src={logo} alt="Miswag Logo" className="w-28 pt-1" />

                    {navItems.map(item => (
                        <Link to={item.path} key={item.title} style={{ textDecoration: 'none' }}>
                            <h1 className="text-amber-900 hover:text-orange-500 font-semibold mb-4 ml-3 mt-5">
                                {item.title}
                            </h1>
                        </Link>
                    ))}
                </div>
            </Drawer>
        </nav>
    );
}

export default NavBar;
