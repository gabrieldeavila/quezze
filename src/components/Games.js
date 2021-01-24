import React, { useEffect } from "react";
import { fetchCategoriesAndGames } from "../actions";
import { connect } from "react-redux";

class Games extends React.Component {
  componentDidMount(){
    this.props.fetchCategoriesAndGames()
  }
  render() {
    console.log(this.props.cat)
    return <div>{}</div>;
  }
}

const mapStateToProps = (state) => {
  return { cat: state };
};

export default connect(mapStateToProps, { fetchCategoriesAndGames })(Games);
