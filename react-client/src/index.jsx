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
      clientGet: '',
      clientPost: '',
      clientIndex: null
    } 
    this.updateClientIndex = this.updateClientIndex.bind(this)   
    this.toggleClientRoutesForm = this.toggleClientRoutesForm.bind(this)
  }

  updateClientIndex(index) {
    this.setState({ clientIndex: index})
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

 
  updateGetDetails(e) {
    this.setState({ clientGet: e.target.value })
  }

  updatePostDetails(e) {
    this.setState({ clientPost: e.target.value })
  }

  updateClientIndex(index) {
    this.setState({ clientIndex: index, showClientForm: !this.state.showClientForm})
  }

  render() {
    
  const showRoutes = this.state.showClientForm ? <Client index={this.state.clientIndex}/> : null;


    return (
      <div>
        <h1>Shark.io</h1>
        <button onClick={this.handleNewNode.bind(this)}> Client +</button>
        <button onClick={this.handleNewServer.bind(this)}> Server +</button>
        <button onClick={this.handleNewDB.bind(this)}> Database +</button>
        <button onClick={this.handleAllDelete.bind(this)}> Clear Sketch</button>
        <Svg>
          {this.state.newNode.map((node, i) => { 
            return <Node 
                      key={i} 
                      index={i + 1}
                      getIndex={this.updateClientIndex}
                      />})}

          {this.state.newServer.map(server => server)}
          {this.state.newDB.map(db => db)}
        </Svg>
        {showRoutes}
        {/* <div>
          <form>
            <h3> Client: {this.state.clientIndex} </h3>
           
            <p> Get: 
                  <input 
                    placeholder="Enter Get Route Details" 
                    value={this.state.clientGet} 
                    onChange={this.updateGetDetails.bind(this)}/> </p>

             <p> Post: 
               <input  
                  placeholder="Enter Get Route Details" 
                  value={this.state.clientPost} 
                  onChange={this.updatePostDetails.bind(this)} /> </p>
           
            <button> Save </button>
          </form>
        </div> */}
      </div>
     
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


