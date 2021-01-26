import React from "react";
import { fetchCategoriesAndGames } from "../actions";
import { connect } from "react-redux";

import Categories from "./Categories";

class Games extends React.Component {
  componentDidMount() {
    this.props.fetchCategoriesAndGames();
  }
  categories() {
    return this.props.categories.map((category) => {
      return (
        <Categories
          key={category.id}
          games={this.props.games}
          category={category}
        ></Categories>
      );
    });
  }
  render() {
    return <div>{this.categories()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories, games: state.games };
};

export default connect(mapStateToProps, { fetchCategoriesAndGames })(Games);
