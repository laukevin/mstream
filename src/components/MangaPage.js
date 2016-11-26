import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

class MangaPage extends Component {
  render() {
  	console.log(this.props.link);
  	return (
  	  <View key={this.props.link}>
  		<Image
  		  style={styles.image}
  		  source={require('../../static/images/black_butler001.png')}
  		  resizeMode="contain"/>
  	  </View>);
  }
};

const styles = {
  image: {
    width: 400,
    height: 400,
  }
};

export default MangaPage;