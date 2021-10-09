import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from '@root/global/styles'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME</Text>
      </View>
    )
  }
}
