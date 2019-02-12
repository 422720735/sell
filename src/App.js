import React, {Component} from 'react';
type Props = {};
import {Provider} from 'react-redux'
import AppNavigator from './js/navigator/AppNavigator'
import store from './store';


export default class App extends Component<Props> {
  render() {
    return <Provider store={store}>
      <AppNavigator/>
    </Provider>
  }
}
