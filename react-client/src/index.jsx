import React from 'react';
import ReactDOM from 'react-dom';
import Node from './components/Node.jsx';
import styled from 'styled-components';

const Svg = styled.svg`
  border: 1px solid #ddd;
  width: 100%;
  height: 400px;
`;


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
    
  }

  
  render() {
    return (
      <Svg>
        <Node x={20} y={20} />
      </Svg>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


