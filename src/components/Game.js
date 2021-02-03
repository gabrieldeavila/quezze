import React from "react";
import { connect } from "react-redux";

class Game extends React.Component {
  render() {
    const game = this.props.gameProps;
    return (
      <div className="game">
        <h3 className="game-name">{game.name}</h3>
        <div className="game-description">{game.desc}</div>
        <div className="game-button"> <button>Play</button> </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProperty) => {
  return { game: state };
};

export default connect(mapStateToProps)(Game);
