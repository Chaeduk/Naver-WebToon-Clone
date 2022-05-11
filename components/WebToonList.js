/* eslint-disable global-require */
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import WebToonItem from './WebToonItem';

const data = [
  {
    url: require('../data/image/webtoon_Image/01.jpg'),
    title: '참교육',
    author: '채용택/한가람',
    likeNum: 9.84,
  },
  {
    url: require('../data/image/webtoon_Image/02.jpg'),
    title: '신의 탑',
    author: 'SIU',
    likeNum: 9.9,
  },
  {
    url: require('../data/image/webtoon_Image/03.jpg'),
    title: '뷰티풀 군바리',
    author: '설이/윤성원',
    likeNum: 9.81,
  },
  {
    url: require('../data/image/webtoon_Image/04.jpg'),
    title: '윈드브레이커',
    author: '조용석',
    likeNum: 9.85,
  },
  {
    url: require('../data/image/webtoon_Image/05.jpg'),
    title: '퀘스트지상주의',
    author: '박태준 만화회사',
    likeNum: 9.71,
  },
  {
    url: require('../data/image/webtoon_Image/06.jpg'),
    title: '쇼미더럭키짱!',
    author: '박태준/김성모',
    likeNum: 9.44,
  },
  {
    url: require('../data/image/webtoon_Image/07.jpg'),
    title: '장씨세가 호위무사',
    author: '김인호/조형근',
    likeNum: 9.94,
  },
  {
    url: require('../data/image/webtoon_Image/08.jpg'),
    title: '소녀의 세계',
    author: '모랑지',
    likeNum: 9.93,
  },
  {
    url: require('../data/image/webtoon_Image/09.jpg'),
    title: '백수세끼',
    author: '치즈',
    likeNum: 9.83,
  },
  {
    url: require('../data/image/webtoon_Image/10.jpg'),
    title: '유미의 작가 수칙',
    author: '이동건',
    likeNum: 9.92,
  },
  {
    url: require('../data/image/webtoon_Image/11.jpg'),
    title: '앵무살수',
    author: '김성진',
    likeNum: 9.98,
  },
  {
    url: require('../data/image/webtoon_Image/12.jpg'),
    title: '팔이피플',
    author: '매미/희세',
    likeNum: 9.93,
  },
  {
    url: require('../data/image/webtoon_Image/13.jpg'),
    title: '만렙돌파',
    author: '성물예정,홍실/미노',
    likeNum: 9.45,
  },
  {
    url: require('../data/image/webtoon_Image/14.jpg'),
    title: '잔불의 기사',
    author: '환댕',
    likeNum: 9.95,
  },
  {
    url: require('../data/image/webtoon_Image/15.jpg'),
    title: '리턴 투 플레이어',
    author: '엄키/세혼/인덱스',
    likeNum: 9.9,
  },
  {
    url: require('../data/image/webtoon_Image/16.jpg'),
    title: '요리GO',
    author: 'HO9',
    likeNum: 9.94,
  },
  {
    url: require('../data/image/webtoon_Image/17.jpg'),
    title: '다시쓰는 연애사',
    author: '최경민/영모',
    likeNum: 9.93,
  },
  {
    url: require('../data/image/webtoon_Image/18.jpg'),
    title: '똑 닮은 딸',
    author: '이담',
    likeNum: 9.98,
  },
];
const WebToonList = () => {
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

const styles = StyleSheet.create({
  block: {
    width: '100%',
    flex: 1,
  },
});

export default WebToonList;
