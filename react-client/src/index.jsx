import React from 'react';
import ReactDOM from 'react-dom';
import Node from './components/Node.jsx';
import styled from 'styled-components';
import { throws } from 'assert';

const Svg = styled.svg`
  border: 1px solid #ddd;
  width: 100%;
  height: 400px;
`;


class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      newNode: [<Node />]
    }


    
  }

  handleNewNode() {
    this.setState({
      newNode: [...this.state.newNode, <Node />]
    })
    
  }

  render() {
    

    return (
      <div>
      <Svg>
        {this.state.newNode.map(node => node)}
      </Svg>
        <button onClick={this.handleNewNode.bind(this)}> Click me</button>
      </div>
     
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


