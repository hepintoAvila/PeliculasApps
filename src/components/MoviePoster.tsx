/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { TouchableOpacity } from 'react-native-gesture-handler';



interface Props {
    movie: Movie;
    height?: number;
    width?: number;
    navigation?: any;
}

export const MoviePoster = ({ movie, height = 200, width = 140, navigation }: Props ) => {
    const uri = `https://image.tmdb.org/t/p/w500/${ movie?.poster_path }`;
 //console.log(uri);

    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate("DetailScreen", movie ) }
            activeOpacity={0.8}
            style={ {
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
        >
        <View style={ styles.targeta }>
        <Image
            source={{ uri }}
            style={styles.image}
        />
    </View>
    </TouchableOpacity>
    
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
        marginTop:0,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    },
    targeta:
    {   
        height: 200,
        width:140,
        paddingVertical:5,
        paddingHorizontal:2,
        alignItems:'stretch',
        backgroundColor:'white',
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        
        },
    });
