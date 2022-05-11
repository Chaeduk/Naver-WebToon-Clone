/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
import React from 'react';
import Swiper from 'react-native-swiper';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const imageData = [
  {url: require('../data/image/ad_Image/ad(3).jpg'), index: 0},
  {url: require('../data/image/ad_Image/ad(2).jpg'), index: 1},
  {url: require('../data/image/ad_Image/ad(1).jpg'), index: 2},
];

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={styles.totalText}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

const Ad = () => {
  return (
    <View style={styles.block}>
      <Swiper renderPagination={renderPagination}>
        {imageData.map(data => (
          <View style={styles.slide} key={data.index}>
            <Image style={styles.image} source={data.url} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'green',
    width: '100%',
    height: '25%',
  },
  slide: {
    flex: 1,
  },
  image: {
    width,
    flex: 1,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 12,
    backgroundColor: '#A4A4A4',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  paginationText: {
    color: 'white',
    fontSize: 18,
  },
  totalText: {
    color: 'gray',
    letterSpacing: 1,
  },
});

export default Ad;
