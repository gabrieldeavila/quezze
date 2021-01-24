import {combineReducers} from "redux";
import categoriesReducer from "./categoriesReducer";
import gamesReducer from "./gamesReducer";

export default combineReducers({
  categories: categoriesReducer,
  games: gamesReducer
})