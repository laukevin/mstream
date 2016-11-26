import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Header extends Component {
  render() {
    return (
  	  <View style={styles.viewStyle}>
  		<Text style={styles.textStyle}>{this.props.title}</Text>
  	  </View>
	);
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
  },
  textStyle: {
  	fontSize: 20
  }
};

export default Header;