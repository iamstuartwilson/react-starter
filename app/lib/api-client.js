import 'whatwg-fetch';

// Usage:
// apiClient.get('path/to/json').then((data) => {
//   console.log(data);
// });
const apiClient = {
  get(path) {
    // Here we can format routes to API endpoints and ensure that JSON is returned as the response
    return fetch(`/${path}.json`).then((res) => {
      return res.json();
    });
  }
}

export default apiClient;
