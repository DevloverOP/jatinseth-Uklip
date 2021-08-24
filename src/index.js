import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import {FavouriteContext} from './components/store/FavouriteContext';


ReactDOM.render(
       <FavouriteContext>
       <Router>
       <App/>
       </Router>
       </FavouriteContext>, 
       document.getElementById('root')
       );