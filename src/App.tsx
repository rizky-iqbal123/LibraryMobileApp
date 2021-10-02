import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  containerView: {
    flex: 1
  }
})

const App = () => {
  return (
    <View style={styles.containerView}>
      <Text>Hello World!</Text>
    </View>
  )
}

export default App
