import React, { Component } from "react";
import GameComponent from "../gameComponent/GameComponent";
import Thunder from "../../media/audio/thunder2.wav";
import Punches from "../../media/audio/punches.wav";

// Audio Sounds
// Doesn't Score/Hit
let shotAudio = new Audio(Thunder);
// Scores/Makes a Hit
let scoreAudio = new Audio(Punches);

// Team Component
class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: 0,
      score: 0,
    };
  }

  shoot = () => {
    if (this.shotsMade()) {
      this.setState((state) => {
        return {
          ...state,
          shots: state.shots + 1,
          score: state.score + 1,
        };
      });
      scoreAudio.play();
    } else {
      shotAudio.play();
      this.setState((state) => {
        return {
          ...state,
          shots: state.shots + 1,
        };
      });
    }
  };

  shotsMade = () => {
    return Math.random() > 0.5 ? 1 : 0;
  };
  // What gets printed on the browser
  render() {
    //logic - all javascript
    let stats = (this.state.score / this.state.shots) * 100;

    return (
      //JSX Code
      <div>
        {this.props.name}
        <img src={this.props.logo} width="200px" />
        <h2>Shots: {this.state.shots}</h2>
        <h2>Score: {this.state.score}</h2>

        <h3>Stats: {this.state.shots > 0 && stats} %</h3>
        <button onClick={() => this.shoot()}>Battle</button>
      </div>
    );
  }
}

export default Team;
