import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

import Header from './Header';
import SingleFeedItem from './SingleFeedItem';

class MangaFeed extends Component {

  componentWillMount() {
  	console.log("wut");
  	this.setState({
  	  mangas: [
  	  	{mangaTitle: "naruto", chapter: 200, chapterTitle: "This is it", date: "Today", link: "http://img.mangastream.com/cdn/manga/124/3836/", pages: 5},
  	  	{mangaTitle: "naruto", chapter: 200, chapterTitle: "This is it", date: "Yesterday", link: "http://img.mangastream.com/cdn/manga/124/3836/", pages: 2},
  	  ]
  	});
  }

  renderFeed() {
  	console.log(this.state);
  	return this.state.mangas.map(
  	  manga => 
  	  <SingleFeedItem 
  	    manga={manga}
  	    navigator={this.props.navigator}/>);
  }

  render() {
  	return (
  	  <View>
  	    <Header title="Latest releases"/>
  	    {this.renderFeed()}
  	  </View>
  	);
  }
}

export default MangaFeed;