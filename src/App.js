import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar'
import CoffeDetails from './Pages/CoffeDetails';


function App() {
  return (
    <div className="font-sans ">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/miswagcoffee/:dataId/:dataName' element={<CoffeDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
