import React from "react";
import { connect } from "react-redux";

import Game from "./Game";
import { fetchCategoriesAndGames } from "../actions";

class Categories extends React.Component {
  componentDidMount(){
    this.props.fetchCategoriesAndGames()
  }
  render() {
    // console.log(this.props.listGames)
    const name = this.props.category.name;
    return (
      <div className="category">
        <div className="category-name">{name}</div>
      </div>
    );
  }
}

const mapToState = (state, ownProperty) => {
  console.log(ownProperty)
  return { listGames: state.games.find(game => ownProperty.category.id === game.catId) };
};

export default connect(mapToState, { fetchCategoriesAndGames })(Categories);
