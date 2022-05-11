import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ad from '../components/Ad';
import WebToonList from '../components/WebToonList';

const HomeScreen = () => {
  return (
    <View style={styles.block}>
      <Ad />
      <View style={styles.week} />
      <WebToonList />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  week: {
    backgroundColor: 'white',
    width: '100%',
    height: 55,
  },
});

export default HomeScreen;
