import { createContext, useState } from "react";

const SeriesContext = createContext({
  allFavourites: [],
  totalFavs: 0,
  isFavouriteItem: (serieItemId) => {},
  addFavouriteItem: (series) => {},
  removeFavouriteItem: (serieItemId) => {},
});

export function FavouriteContext(props) {
  const [favouriteSeries, setFavouriteSeries] = useState([]);

  function addFavourite(series) {
    setFavouriteSeries((previusFavSeries) => {
      return previusFavSeries.concat(series);
    });
  }

  function removeFavourite(serieItemId) {
    setFavouriteSeries((previusFavSeries) => {
      return previusFavSeries.filter(
        (favseries) => favseries.id !== serieItemId
      );
    });
  }

  function isFavourite(serieItemId) {
    return favouriteSeries.some((favseries) => favseries.id === serieItemId);
  }

  const context = {
    allFavourites: favouriteSeries,
    totalFavs: favouriteSeries.length,
    isFavouriteItem: isFavourite,
    addFavouriteItem: addFavourite,
    removeFavouriteItem: removeFavourite,
  };

  return (
    <SeriesContext.Provider value={context}>
      {props.children}
    </SeriesContext.Provider>
  );
}
export default SeriesContext;
