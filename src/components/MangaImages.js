import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  ScrollView,
  View,
} from 'react-native';

import Header from './Header';
import MangaPage from './MangaPage';

class MangaImages extends Component {
  
  padToThree(number) {
  	if (number<=9999) { number = ("00"+number).slice(-3); }
  	  return number;
  }

  componentWillMount() {
  	console.log(this.props.link);
  	var links = [];
  	for (var i = 1; i < this.props.pages; i++) {
  	  links.push(this.props.link + this.padToThree(i) + '.png');	
  	}
  	console.log(links);
  	this.setState({links: links});
  }

  renderManga() {
  	console.log(this.state);
  	return this.state.links.map(
  	  link => 
  	  <MangaPage link={link}/>);
  }

  render() {
  	return (
  	  <View>
  	    <Header title={this.props.title}/>
  	    <ScrollView>
  	    {this.renderManga()}
  	    </ScrollView>
  	  </View>
  	);
  }
}


MangaImages.propTypes = {
  link: PropTypes.string.isRequired,
};

export default MangaImages;