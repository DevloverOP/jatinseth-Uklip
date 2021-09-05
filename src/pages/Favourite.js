import {useContext}from 'react';
import SeriesContext from '../components/store/FavouriteContext'
import Series from '../components/Series/Series'
function Favourite(){

    const favourite = useContext(SeriesContext);

    return(
           <>
              <h1>Favourite series</h1>
                <Series data={favourite.allFavourites}/>
           </>
    );
}

export default Favourite;