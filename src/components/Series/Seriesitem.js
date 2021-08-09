import "./Seriesitem.css";
import { useContext } from "react";
import SeriesContext from "../store/FavouriteContext";

function Seriesitem(props) {
  const us = useContext(SeriesContext);

  const itemfavourite = us.isFavouriteItem(props.id);

  function changeState() {
    if (itemfavourite) {
      us.removeFavouriteItem(props.id);
    } else {
      us.addFavouriteItem({
        id: props.id,
        title: props.title,
        description: props.description,
        imageurl: props.imageurl,
      });
    }
  }

  return (
    <div className="card">
      <div className="imgbox">
        <img src={props.imageurl}></img>
      </div>

      <div>
        <div className="actions">
          <button className="btn">Play</button>
          <button className="btn" onClick={changeState}>
            {itemfavourite ? "Remove" : "Fav+"}
          </button>
        </div>
        <div className="desc">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Seriesitem;
