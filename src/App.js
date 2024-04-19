import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ThingsToRead from './pages/ThingsToRead';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path ='/home' element ={<Home/>}></Route>
          <Route path ='/thingstoread' element={<ThingsToRead/>}></Route>
          <Route path ='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
