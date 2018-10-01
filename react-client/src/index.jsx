import React from 'react';
import ReactDOM from 'react-dom';
import Node from './components/Node.jsx';
import styled from 'styled-components';
import Server from './components/Server.jsx';
import Database from './components/Database.jsx';
import Client from './components/Client.jsx';
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
      showClientForm: false,
      newNode: [],
      newServer: [],
      newDB: [],
      routes: {
        client: [{index: 0, get: '', post: ''}],
        server: [],
        database: [],
      },
      clientGet: '',
      clientPost: ''
    }    
  }

  handleNewNode() {
    this.setState({
      newNode: [...this.state.newNode, <Node />]
    }) 
  }

  handleNewServer() {
    this.setState({
      newServer: [...this.state.newServer, <Server />]
    })
  }

  handleNewDB() {
    this.setState({
      newDB: [...this.state.newDB, <Database />]
    })
  }

  toggleClientRoutesForm() {
    this.setState({
      showClientForm: !this.state.showClientForm
    })
  }

  handleAllDelete() {
    this.setState({
      newNode: [],
      newServer: [],
      newDB: []
    })
  }

  render() {
    
    const displayIndex = () => {
      this.state.newNode.forEach((item, i )=> console.log('index-->', i))
    }

    const clientForm = this.state.showClientForm === true ? <Client/> : null;

    displayIndex();
    return (
      <div>
        <h1>Shark.io</h1>
        <button onClick={this.handleNewNode.bind(this)}> Client +</button>
        <button onClick={this.handleNewServer.bind(this)}> Server +</button>
        <button onClick={this.handleNewDB.bind(this)}> Database +</button>
        <button onClick={this.handleAllDelete.bind(this)}> Clear Sketch</button>
        <Svg>
          {this.state.newNode.map((node, i)=> {return <Node key={i} index={i + 1} clientForm={this.toggleClientRoutesForm.bind(this)}/>})}
          {this.state.newServer.map(server => server)}
          {this.state.newDB.map(db => db)}
        </Svg>
        {clientForm}
      </div>
     
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


