import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation';
class App extends React.Component {
  componentDidMount() {
    /*  Axios.get(
      'https://api.github.com/search/repositories?q=stars%3A%3E0&page=2',
    ).then(res => console.log(res)); */
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
