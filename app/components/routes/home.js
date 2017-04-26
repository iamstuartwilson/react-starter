import React from 'react';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <div>
        <h1 className={this.state.isLoading ? 'is-loading' : ''}>Homepage!</h1>
      </div>
    );
  }
}

export default Home;
