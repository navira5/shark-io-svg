import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class Server extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 150,
      y: 20
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseDown(e) {
    this.coords = {
      x: e.pageX,
      y: e.pageY
    }
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseUp() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    this.coords = {};
  }

  handleMouseMove(e) {
    const xDiff = this.coords.x - e.pageX;
    const yDiff = this.coords.y - e.pageY;

    this.coords.x = e.pageX;
    this.coords.y = e.pageY;

    this.setState({
      x: this.state.x - xDiff,
      y: this.state.y - yDiff
    });
  }

  render() {
    const { x, y } = this.state;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width="100"
          height="100"
          fill="red"
          onMouseDown={this.handleMouseDown.bind(this)}
          onMouseUp={this.handleMouseUp.bind(this)}
        />
        <text x={x + 50} y={y + 55}>Server</text>
        
      </g>

    )
  }
}


export default Server;

