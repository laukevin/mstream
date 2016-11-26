import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class SingleFeedItem extends Component {

  _handlePress(title, link, pages) {
  	return (() => {this.props.navigator.push({id:"manga", title:title, link:link, pages: pages})});
  	// console.log("pressed");
  	// this.props.navigator.push({id:"manga", url:url});
  }

  render() {
  	console.log(this.props.manga);
  	return (
  	  <TouchableOpacity key={this.props.manga.mangaTitle + String(this.props.manga.chapter)} 
  	  		style={styles.viewStyle}
  	  		onPress={this._handlePress(
  	  			this.props.manga.mangaTitle, this.props.manga.link, this.props.manga.pages)}>
  	  	<View style={styles.titleGrouping}>
  	  	  <View>
  	  	  	<Text>{this.props.manga.mangaTitle}</Text>
  	  	  </View>
  	  	  <View>
  	  	  	<Text>{this.props.manga.chapter}</Text>
  	  	  </View>
  	  	  <View style={styles.dateStyle}>
  	  	  	<View>
  	  	    <Text>{this.props.manga.date}</Text>
  	  	    </View>
  	  	  </View>
  	  	</View>
  	  	<Text>{this.props.manga.chapterTitle}</Text>
  	  </TouchableOpacity>
  	);
  }
}

const styles = {
  viewStyle: {
  	backgroundColor: '#e4f6d4',
  	borderBottomWidth: 1,
  	borderBottomColor: '#cedec0'
  },
  titleGrouping: {
  	flexDirection: 'row',
  	width: 800,
  },
  dateStyle: {
  	marginLeft:230,
  	flexDirection: 'row',
  	alignItems: 'flex-end'
  },
};

export default SingleFeedItem;