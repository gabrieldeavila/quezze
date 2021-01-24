import info from "../apis/info";
import _ from "lodash"

export const fetchCategoriesAndGames = () => async(dispatch, getState) => {
  await dispatch(fetchCategories());

  const test = _.chain(getState().categories)
  .forEach(({id}) => {console.log(id)} )
  .value()
  console.log(test, "test")
}

export const fetchCategories = () => async (dispatch) => {
  const response = await info.get('categories.json');
  dispatch({ type: "FETCH_CATEGORIES", payload: response.data });
};

export const fetchGames = () => async (dispatch) => {
  const response = await info.get('games.json');
  dispatch({type: "FETCH_GAMES", payload: response.data})
}

