import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import App from './App';
import Blog from './Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route exact path='/getBlogs/:id' element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
    // <App />
);

