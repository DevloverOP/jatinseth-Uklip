import {useContext, useState,useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import SeriesContext from '../store/FavouriteContext'


function NavBar(props) {
 
  const favctx = useContext(SeriesContext);
  const favbtn = useRef();
  const favs =favctx.totalFavs;

useEffect(()=>{

if(props.showLink){
console.log("hello",favbtn.current)

window.getComputedStyle(favbtn.current,'::after');

}

},[props])

 

   
  if (props.showLink) {
    return (
      
      <header className={classes.header}>
            <div className={classes.logo}>
              <h1>
                <Link to="/home">UKlip</Link>
              </h1>
            </div>
        <div className={classes.greet}>
          <p>Welcome! {props.user}</p>
        </div>

        <div className={classes.linkbox}>
          <ul>
            <li>
              <Link to="/home">All Series</Link>
            </li>
            <li>
              <Link to="/new-series">Add new series</Link>
            </li>
            <li className={classes.badge} ref={favbtn}>
              <Link to="/favourite">Favourites</Link>
            </li>
          </ul>
        </div>
        <div className={classes.signup}>
             <Link to="/login" onClick={()=>{props.signout(false)}}>Sign Out</Link>
          </div>
           </header>

    );


  } else {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>
          <h1>
            <Link to="/">UKlip</Link>
          </h1>
        </div>

        <div className={(classes.linkbox, classes.box)}>
          <Link to="/login" className={classes.signup}>
            Sign In
          </Link>
        </div>
      </header>
    );
  }

}

export default NavBar;
