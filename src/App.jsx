import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CarDetails from './pages/carDetail';
import SearchingCars from './pages/searchingCars';
import Home from './pages/home';
import Page404 from './pages/error404';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search-result/:driverType/:date/:pickUpTime' element={<SearchingCars />} />
          <Route path='search-result/:driverType/:date/:pickUpTime/:totalPassenger' element={<SearchingCars />} />
          <Route path='car/:id' element={<CarDetails />} />

          {/* 404 Error Page */}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
