import React from 'react';
import logo from '../assets/img/Picsart_24-09-30_16-38-04-777.png';

function NavBar() {
  const navItems = ['Store', 'Favorite', 'Blog', 'About'];

  return (
    <nav className="flex items-center justify-between p-2  ">
      <img src={logo} alt="Miswag Logo" className="w-40 ml-20" />
      <div className="flex space-x-7 mr-20">
        {navItems.map(item => (
          <h1 key={item} className="text-amber-900 hover:text-orange-500 font-semibold">
            {item}
          </h1>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
