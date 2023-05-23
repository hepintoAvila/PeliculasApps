/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
const {width: windowWidth} = Dimensions.get('window');
 
const INITIAL_INDEX = 0;
export default function ImageCarousel(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {backdrop_path, original_title, overview} = item;
    const uri = `https://image.tmdb.org/t/p/w500/${ backdrop_path }`;
     return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <ImageBackground source={{uri: uri}} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>{original_title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={props.data}
        renderItem={renderItem}
        itemWidth={0.99 * windowWidth}
        inActiveOpacity={0.3}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', height:315,marginTop:-17},
  carousel: {
    backgroundColor: 'white',
    aspectRatio: 1.5,
    flexGrow: 0,
    height:310,
    paddingVertical:20,
  },
  item: {
    flex: 1,
    
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 10,
    elevation: 9,
    
  }, 
  imageBackground: {
    flex: 2,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 10,
    
    elevation: 9,
  },
  rightTextContainer: {
    
    marginLeft: 'auto',
    marginRight: -2,
   // backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: {color: 'white'},
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  contentText: {
    marginTop: 0,
    fontSize: 12,
    color: 'black',
  },
});
