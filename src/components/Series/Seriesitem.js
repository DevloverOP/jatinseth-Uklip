import "./Seriesitem.css";
import { useContext } from "react";
import { useHistory } from "react-router";
import SeriesContext from "../store/FavouriteContext";

function Seriesitem(props) {
  const us = useContext(SeriesContext);
  const itemfavourite = us.isFavouriteItem(props.id);
  const history = useHistory();
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
  
  async function deleteHandler(){
    const req = await fetch(`https://series-259a7-default-rtdb.firebaseio.com/series/${props.id}.json`,{
      method:"DELETE"
    }).then((res)=>{
      if(res.status===200) alert('Data deleted')
      else alert('Error in Data deletion')
      history.replace('/')
    }).catch((er)=>{
      console.log(er)
    })
    history.replace('/home')
  }

  return (
    <div className="card">
      <div className="imgbox">
        <img src={props.imageurl}></img>
      </div>

      <div>
        <div className="actions">
          <button className="btn">Play</button>
          <button className="btn"onClick={deleteHandler}>Delete</button>
          <button className="btn" onClick={changeState}>
            {itemfavourite ? "Un-Fav" : "Fav+"}
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
