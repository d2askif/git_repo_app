import React from 'react';
import RepoContainer from './src/containers/RepoContainer';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
class App extends React.Component {
  componentDidMount() {
    /*  Axios.get(
      'https://api.github.com/search/repositories?q=stars%3A%3E0&page=2',
    ).then(res => console.log(res)); */
  }
  render() {
    return (
      <Provider store={store}>
        <RepoContainer />
      </Provider>
    );
  }
}

export default App;
