import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

const WebToonItem = ({title, author, url, likeNum}) => {
  return (
    <View style={styles.block}>
      <Image style={styles.image} source={url} />
      <View style={styles.desc}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.reaction}>
          <Icon name="star" color="red" size={17} />
          <Text style={styles.reactionNum}>{likeNum}</Text>
        </View>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};

WebToonItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.number.isRequired,
  likeNum: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    height: 200,
  },
  desc: {
    padding: 7,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  reaction: {
    height: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  reactionNum: {
    marginLeft: 5,
    color: 'red',
  },
  author: {
    color: 'black',
  },
});

export default WebToonItem;
