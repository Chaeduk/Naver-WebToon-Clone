/* eslint-disalbe react/forbid-prop-types */
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import WebToonItem from './WebToonItem';
import dummy from '../data/webtoon.json';

const WebToonList = ({route}) => {
  const data = dummy[route.params.day];
  return (
    <View style={styles.block}>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({item}) => (
          <WebToonItem
            title={item.title}
            author={item.author}
            url={item.url}
            likeNum={item.likeNum}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

WebToonList.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const styles = StyleSheet.create({
  block: {
    width: '100%',
    flex: 1,
  },
});

export default WebToonList;
