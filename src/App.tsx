import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
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
