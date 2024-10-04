import React, { createContext, useContext, useState } from "react";
import espresso from '../img/Espresso.jpg';
import latte from '../img/Latte.jpg';
import cappuccino from '../img/Cappuccino.jpg';
import mocha from '../img/Mocha.jpg';
import americano from '../img/Americano.jpg';
import flatWhite from '../img/Flat-White.jpg';
import caramelMacchiato from '../img/Caramel-Macchiato.jpg';
import icedCoffee from '../img/iced-coffee.jpg';
import coldBrew from '../img/Cold-Brew.jpg';
import affogato from '../img/Affogato.jpg';
import turkishCoffee from '../img/Turkish-Coffee.jpg';
import icedMocha from '../img/Iced-Mocha.jpg';
import vanillaLatte from '../img/Vanilla-Latte.jpg';
import espressoMacchiato from '../img/Espresso-Macchiato.jpg';
import mochaFrappuccino from '../img/Mocha-Frappuccino.jpg';
import irishCoffee from '../img/Irish-Coffee.jpg';
import hazelnutCappuccino from '../img/Hazelnut-Cappuccino.jpg';
import cafeAuLait from '../img/Café-au-Lait.jpg';
import cinnamonLatte from '../img/Cinnamon-Latte.jpg';
import espressoConPanna from '../img/Espresso-Con-Panna.jpg';
import doubleEspresso from '../img/Double-Espresso.jpg';
import honeyLatte from '../img/Honey-Latte.jpg';
import chocolateMocha from '../img/Chocolate-Mocha.jpg';
import flatWhiteIced from '../img/Flat-White-Iced.jpg';
import nitroColdBrew from '../img/Nitro-Cold-Brew.jpg';
import coconutLatte from '../img/Coconut-Latte.jpg';
import pumpkinSpiceLatte from '../img/Pumpkin-Spice-Latte.jpg';
import saltedCaramelLatte from '../img/Salted-Caramel-Latte.jpg';
import espressoTonic from '../img/Espresso-Tonic.jpg';
import cafeMochaIced from '../img/Café-Mocha-Iced.jpg';

const DataContext = createContext();

const data = [
  { id: 1, img: espresso, title: "Espresso" },
  { id: 2, img: latte, title: "Latte" },
  { id: 3, img: cappuccino, title: "Cappuccino" },
  { id: 4, img: mocha, title: "Mocha" },
  { id: 5, img: americano, title: "Americano" },
  { id: 6, img: flatWhite, title: "Flat White" },
  { id: 7, img: caramelMacchiato, title: "Caramel Macchiato" },
  { id: 8, img: icedCoffee, title: "Iced Coffee" },
  { id: 9, img: coldBrew, title: "Cold Brew" },
  { id: 10, img: affogato, title: "Affogato" },
  { id: 11, img: turkishCoffee, title: "Turkish Coffee" },
  { id: 12, img: icedMocha, title: "Iced Mocha" },
  { id: 13, img: vanillaLatte, title: "Vanilla Latte" },
  { id: 14, img: espressoMacchiato, title: "Espresso Macchiato" },
  { id: 15, img: mochaFrappuccino, title: "Mocha Frappuccino" },
  { id: 16, img: irishCoffee, title: "Irish Coffee" },
  { id: 17, img: hazelnutCappuccino, title: "Hazelnut Cappuccino" },
  { id: 18, img: cafeAuLait, title: "Café au Lait" },
  { id: 19, img: cinnamonLatte, title: "Cinnamon Latte" },
  { id: 20, img: espressoConPanna, title: "Espresso Con Panna" },
  { id: 21, img: doubleEspresso, title: "Double Espresso" },
  { id: 22, img: honeyLatte, title: "Honey Latte" },
  { id: 23, img: chocolateMocha, title: "Chocolate Mocha" },
  { id: 24, img: flatWhiteIced, title: "Flat White Iced" },
  { id: 25, img: nitroColdBrew, title: "Nitro Cold Brew" },
  { id: 26, img: coconutLatte, title: "Coconut Latte" },
  { id: 27, img: pumpkinSpiceLatte, title: "Pumpkin Spice Latte" },
  { id: 28, img: saltedCaramelLatte, title: "Salted Caramel Latte" },
  { id: 29, img: espressoTonic, title: "Espresso Tonic" },
  { id: 30, img: cafeMochaIced, title: "Café Mocha Iced" },
];

export const DataProvider = ({ children }) => {
  const [items] = useState(data);

  return (
    <DataContext.Provider value={items}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
