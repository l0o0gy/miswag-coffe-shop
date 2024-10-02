import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

function FavoritesCoffee() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    let favorites = [];

    try {
      favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      if (!Array.isArray(favorites)) {
        console.error('Favorites is not an array. Resetting to empty array.');
        favorites = [];
      }
    } catch (error) {
      console.error('Error parsing favorites from localStorage:', error);
      favorites = [];
    }

    setFavorites(favorites);
  }, []);

  return (
    <div className="m-5 md:m-20">
      <h1 className="text-2xl font-bold mb-4">Favorite Coffee</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {favorites.length === 0 ? (
          <p className="text-center text-gray-500">No favorites yet!</p>
        ) : (
          favorites.map(data => <Card key={data.id} miswagData={data} />)
        )}
      </div>
    </div>
  );
}

export default FavoritesCoffee;
