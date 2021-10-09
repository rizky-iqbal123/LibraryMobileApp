import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import BookmarkScreen from '@root/screen/bookmark'
import ChatScreen from '@root/screen/chat'
import HomeScreen from '@root/screen/home'
import ProfileScreen from '@root/screen/profile'

export default class MainTab extends Component {
  render() {
    const Tab = createBottomTabNavigator()
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Bookmark" component={BookmarkScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    )
  }
}
