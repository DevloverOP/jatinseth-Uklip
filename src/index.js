import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {FavouriteContext} from './components/store/FavouriteContext';


ReactDOM.render(

       <FavouriteContext>
       <BrowserRouter>
       <App/>
       </BrowserRouter>
       </FavouriteContext>, 
       document.getElementById('root')
       );