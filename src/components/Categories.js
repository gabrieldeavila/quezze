import React from "react";
import { connect } from "react-redux";

import Game from "./Game";
import { fetchCategoriesAndGames } from "../actions";

class Categories extends React.Component {
  componentDidMount(){
    this.props.fetchCategoriesAndGames()
  }
    render() {
    console.log(this.props)
    const name = this.props.category.name;
    return (
      <div className="category">
        <div className="category-name">{name}</div>
        {}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProperty) => {
  return { listGames: state.games.find(game => {return ownProperty.category.id === game[0].catId}), dummy: "ooo" };
};

export default connect(mapStateToProps, { fetchCategoriesAndGames })(Categories);
