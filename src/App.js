import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import CoffeDetails from './Pages/CoffeDetails';
import FavoritesCoffee from './Pages/FavoritesCoffee';
import Cover from './Components/Cover';
import { DataProvider } from './assets/contacts/store';


function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <DataProvider>
          <MainContent />
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

function MainContent() {
  const location = useLocation();

  const showNavBar = location.pathname !== '/';

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path='/' element={<Cover />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/miswagcoffee/:dataId/:dataName' element={<CoffeDetails />} />
        <Route path='/favorites' element={<FavoritesCoffee />} />
      </Routes>
    </>
  );
}

export default App;
