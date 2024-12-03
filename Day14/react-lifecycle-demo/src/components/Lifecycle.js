import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello, World!' };
    console.log('Constructor: Component is being constructed.');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component was updated.');
    console.log('Previous State:', prevState.message);
    console.log('Current State:', this.state.message);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted.');
  }

  Message = () => {
    this.setState({
      message: this.state.message === 'Hello, World!' 
        ? 'My name is Mahak!' 
        : 'Hello, World!',
    });
  };

  render() {
    console.log('Render: Component is rendering.');
    return (
      <div>
        <h2>React Lifecycle Demo</h2>
        <p>{this.state.message}</p>
        <button onClick={this.Message}>Change Message</button>
      </div>
    );
  }
}

export default Message;
