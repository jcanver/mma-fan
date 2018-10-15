import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Icon from '../components/Icon'
// import TabBarIcon from '../components/TabBarIcon'
import EventsScreen from '../screens/Events'
import RankingsScreen from '../screens/Rankings'
import TopFifteenScreen from '../screens/TopFifteen'
import NewsScreen from '../screens/News'

const RankingsStack = createStackNavigator({
  Rankings: RankingsScreen,
  TopFifteen: {
    screen: TopFifteenScreen,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'Rankings'
});

RankingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <View>
      <Text bold style={{ color: focused ? theme.primary : theme.mediumGray }}>Rankings</Text>
    </View>
  ),
  tabBarIcon: ({ focused }) => (
    <Icon
      width={26}
      height={26}
      name={focused ? 'beltFilled' : 'belt'}
      fill={focused ? 'primary' : 'mediumGray'}
    />
  ),
}

const EventsStack = createStackNavigator({
  Events: EventsScreen,
})

EventsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <View>
      <Text bold style={{ color: focused ? theme.primary : theme.mediumGray }}>Events</Text>
    </View>
  ),
  tabBarIcon: ({ focused }) => (
    <Icon
      width={26}
      height={26}
      name={focused ? 'eventFilled' : 'event'}
      fill={focused ? 'primary' : 'mediumGray'}
    />
  ),
}

const NewsStack = createStackNavigator({
  News: NewsScreen,
});

NewsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <View>
      <Text bold style={{ color: focused ? theme.primary : theme.mediumGray }}>News</Text>
    </View>
  ),
  tabBarIcon: ({ focused }) => (
    <Icon
      width={26}
      height={26}
      name={focused ? 'newsFilled' : 'news'}
      fill={focused ? 'primary' : 'mediumGray'}
    />
  ),
};

export default createBottomTabNavigator({
  RankingsStack,
  EventsStack,
  NewsStack,
}, {
  initialRouteName: 'EventsStack'
});
