import React, { Component } from "react";
import Team from "../team/Team";

class GameComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div>
          <h1>{this.props.venue} </h1>
          <div id="gameHolder">
            <Team name={this.props.home} logo={this.props.homeLogo} />
            <div>
              <h1> VS </h1>
            </div>
            <Team name={this.props.away} logo={this.props.awayLogo} />
          </div>
          {/* This file represents the code after completing the setup step in the lab
          instructions */}
        </div>
      </React.Fragment>
    );
  }
}

export default GameComponent;
