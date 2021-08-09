import {useContext}from 'react';
import SeriesContext from '../components/store/FavouriteContext'
import Series from '../components/Series/Series'
function Favourite(){

    const favourite = useContext(SeriesContext);

    return(
           <div>
              <h1>Favourite series</h1>
                <Series data={favourite.allFavourites}/>
           </div>
    );
}

export default Favourite;