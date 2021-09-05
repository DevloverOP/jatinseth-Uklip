import { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import SeriesContext from "../store/FavouriteContext";
import DataBase from "../store/userFile";

function NavBar(props) {
  const DB = new DataBase();
  const favctx = useContext(SeriesContext);
  const favbtn = useRef();
  const favs = favctx.totalFavs;

  const logout = () => {
    props.signout(false);
    DB.clearStore();
  };

  if (props.showLink) {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>
          <h1>
            <Link to="/home"className={classes.logotooltip2}>UKlip</Link>
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
            <li ref={favbtn}>
              <Link to="/favourite">Favourites</Link>
              <span className={classes.badge}>{favs}</span>
            </li>
          </ul>
        </div>
        <div className={classes.signup}>
          <Link to="/login" onClick={logout}>
            Sign Out
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>
          <h1>
            <Link to="/" className={classes.logotooltip}>UKlip</Link>
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
