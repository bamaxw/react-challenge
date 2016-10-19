import React, { Component } from 'react';
import {addJoke} from './functions';
import {Jokes} from './Jokes';

class App extends Component {
  constructor() {
		super();
		this.state = {jokes: [], ids: [], fail: false};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		try {
			var xmlHttp = new XMLHttpRequest();
    	xmlHttp.open( "GET", "http://api.icndb.com/jokes/random", false );
    	xmlHttp.send( null );
		} finally {
			var response = JSON.parse(xmlHttp.responseText);
			this.setState(addJoke(this.state, response));
		}
	}

  render() {
		var maxalert = <div></div>;
		if (this.state.fail) {
			maxalert = <div style={{color:"red"}}>Failed to get joke!</div>;
		}

  	return (
    	<div>
				<Jokes jokes={this.state.jokes}/>
				<button onClick={this.handleClick}>Load</button>
				{maxalert}
      </div>
    );
  }
}

export default App;
