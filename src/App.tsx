import React from 'react';
import {
  // BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import PlaceDetail from './components/PlaceDetail';
import PlaceList from './components/PlaceList';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <Header />
      </div>
      <div className='app-content'>
        <Routes>
          <Route path='/detail/:id' element={<PlaceDetail />} />
          <Route path='/' element={<PlaceList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
