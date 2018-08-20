import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <div className="work">
        <h1>Work</h1>
        <div style={{ display: "grid" }}>
          <div style={{ display: "inline-grid" }}>
            <h1>Weights & Biases</h1>
          </div>
          <div style={{ display: "inline-grid" }}>
            <h1>SpotOn</h1>
          </div>
          <div style={{ display: "inline-grid" }}>
            <h1>HabitLab</h1>
          </div>
          <div style={{ display: "inline-grid" }}>
            <h1>Design Thinking & Human Computer Interaction</h1>
          </div>
        </div>
      </div>
    );
  }
}
