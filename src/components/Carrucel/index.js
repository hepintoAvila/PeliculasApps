/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ImageCarousel from './ImageCarousel';


export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <ImageCarousel />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2F34',
    paddingVertical: 30,
  },
  title: {
    color: 'white',
    marginTop: 40,
    marginBottom: 5,
  },
});
