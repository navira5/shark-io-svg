import React from 'react';



class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientGet: '',
      clientPost: '',
    }
  }

  updateGetDetails(e) {
    this.setState({ clientGet: e.target.value })
  }

  updatePostDetails(e) {
    this.setState({ clientPost: e.target.value })
  }

  render() {

    return(
      <div>
        <form>
          <h3> Client: {this.props.index} </h3>

          <p> Get:
                  <input
              placeholder="Enter Get Route Details"
              value={this.state.clientGet}
              onChange={this.updateGetDetails.bind(this)} /> </p>

          <p> Post:
               <input
              placeholder="Enter Get Route Details"
              value={this.state.clientPost}
              onChange={this.updatePostDetails.bind(this)} /> </p>

          <button> Save </button>
        </form>
      </div>
    )
  }
}

export default Client;