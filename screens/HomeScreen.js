import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ad from '../components/Ad';
import WebToonList from '../components/WebToonList';
import Empty from '../components/Empty';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.block}>
      <Ad />
      <Tab.Navigator
        initialRouteName="Mon"
        screenOptions={{
          tabBarIndicatorStyle: {backgroundColor: '#2EFE64'},
        }}>
        <Tab.Screen
          name="Mon"
          component={WebToonList}
          options={{title: '월'}}
          initialParams={{day: 'Mon'}}
        />
        <Tab.Screen
          name="Tus"
          component={WebToonList}
          options={{title: '화'}}
          initialParams={{day: 'Tue'}}
        />
        <Tab.Screen name="Wen" component={Empty} options={{title: '수'}} />
        <Tab.Screen name="Thur" component={Empty} options={{title: '목'}} />
        <Tab.Screen name="Fir" component={Empty} options={{title: '금'}} />
        <Tab.Screen name="Sat" component={Empty} options={{title: '토'}} />
        <Tab.Screen name="Sun" component={Empty} options={{title: '일'}} />
      </Tab.Navigator>
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
});

export default HomeScreen;
