import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Videos from './components/Videos/Videos';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Video from './components/Video/Video';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Router>
      <Routes>
        <Route exact path='/' element={<Videos isProfile={false} />} />
        <Route exact path='/Login' element={<App />} />
        <Route exact path='/Profile' element={<Profile />} />
        <Route exact path='/Video/:id' element={<Video />} />
      </Routes>
    </Router>
  </React.StrictMode>
);