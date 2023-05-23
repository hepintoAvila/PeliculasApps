/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//import Carousel from 'react-native-snap-carousel';
import ImageCarousel from '../components/Carrucel/ImageCarousel';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useNavigation } from '@react-navigation/native';
const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const navigation = useNavigation();
    const { top } = useSafeAreaInsets();
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={windowWidth} />
            </View>
        );
    }
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ marginTop: top + 20 }}>
                <View style={{ flex: 1 }}>
                    <ImageCarousel data={nowPlaying} />
                </View>
                <View style={{ flex: 1 }}>
                    <HorizontalSlider title="Popular" movies={popular} navigation={navigation} />
                </View>
                <View style={{ flex: 1 }}>
                    <HorizontalSlider title="Top Rated" movies={topRated} navigation={navigation}/>
                </View>
                <View style={{ flex: 1 }}>
                    <HorizontalSlider title="Upcoming" movies={upcoming} navigation={navigation}/>
                </View>
            </View>
        </ScrollView>
    );

};

