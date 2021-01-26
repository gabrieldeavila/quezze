import info from "../apis/info";
import _ from "lodash"

export const fetchCategoriesAndGames = () => async(dispatch, getState) => {
  await dispatch(fetchCategories());
  _.chain(getState().categories)
  .map('id')
  .uniq()
  .forEach((id) => {dispatch(fetchGames(id))} )
  .value()
}

export const fetchCategories = () => async (dispatch) => {
  const response = await info.get('categories.json');
  dispatch({ type: "FETCH_CATEGORIES", payload: response.data });
};

export const fetchGames = (id) => async (dispatch) => {
  const response = await info.get('games.json');
  const game = response.data.filter((game) => game.catId === id) 
  dispatch({type: "FETCH_GAMES", payload: game})
}

