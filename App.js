import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/HomeScreen';
import RecommendScreen from './screens/RecommendScreen';
import BestScreen from './screens/BestScreen';
import MyScreen from './screens/MyScreen';
import MoreScreen from './screens/MoreScreen';

const Tab = createBottomTabNavigator();

const calendarIcon = ({color, size}) => (
  <Icon name="calendar-today" size={size} color={color} />
);

const recommendIcon = ({color, size}) => (
  <Icon name="recommend" size={size} color={color} />
);

const bestIcon = ({color, size}) => (
  <Icon name="bookmarks" size={size} color={color} />
);

const myIcon = ({color, size}) => (
  <Icon name="emoji-emotions" size={size} color={color} />
);

const moreIcon = ({color, size}) => (
  <Icon name="more-horiz" size={size} color={color} />
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#424242',
          tabBarStyle: {
            height: 63,
            paddingTop: 5,
            paddingBottom: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '웹툰',
            tabBarIcon: calendarIcon,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Recommend"
          component={RecommendScreen}
          options={{
            title: '추천완결',
            tabBarIcon: recommendIcon,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Best"
          component={BestScreen}
          options={{
            title: '베스트도전',
            tabBarIcon: bestIcon,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="My"
          component={MyScreen}
          options={{title: 'MY', tabBarIcon: myIcon, headerShown: false}}
        />
        <Tab.Screen
          name="MoreScreen"
          component={MoreScreen}
          options={{title: '더보기', tabBarIcon: moreIcon, headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
