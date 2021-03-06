import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from "react-redux";
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import store from "./store"


//Screen Imports
import Home from "./screens/home"
import Match from "./screens/match"
const AppNavigator = createSwitchNavigator(
  {
    Home: { screen: Home },
    Match: { screen: Match },
  },
  {
    initialRouteName: "Home", 
    backBehavior: "none"
  }
);
const AppContainer = createAppContainer(AppNavigator);
interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
