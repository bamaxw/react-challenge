import React from 'react';


export const Jokes = React.createClass({

  render: function() {
    return (
      <div>{
				this.props.jokes.map(joke => <div key={joke.id} style={{border: '1px solid black'}}>{joke.text}</div>)
			}</div>
    );
  }

});
