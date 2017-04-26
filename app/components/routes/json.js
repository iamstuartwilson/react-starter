import React from 'react';
import apiClient from '../../lib/api-client';

class Home extends React.Component {
  constructor() {
    super();

    // Always set a default state here
    // Without this the .map method isn't going to work before we get JSON
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // GET /example.json
    apiClient.get('example').then((data) => {
      this.setState({
        data: data
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.data.map((dataSet) =>
          // Without putting a div around this, the JSX won't compile
          <div>
            <h1>{dataSet.title}</h1>
            <p>{dataSet.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
