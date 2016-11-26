/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import MangaFeed from './src/components/MangaFeed';
import MangaImages from './src/components/MangaImages';

export default class mangastream extends Component {

  _renderScene(route, navigator) {
    if (route.id === "releases") {
      return <MangaFeed navigator={navigator}/>
    } else if (route.id === "manga") {
      return <MangaImages navigator={navigator} 
      			title={route.title} 
      			link={route.link} 
      			pages={route.pages}/>	
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id:"releases"}}
        renderScene={this._renderScene} />
    );
  }
}

AppRegistry.registerComponent('mangastream', () => mangastream);
