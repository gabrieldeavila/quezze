import React from "react";
import {connect} from "react-redux";

const Game = () => {
  return(
    <div>Gameee NAMEEE</div>
  )
}

const mapStateToProps = (state, ownProperty) => {
  return {game: state}
}