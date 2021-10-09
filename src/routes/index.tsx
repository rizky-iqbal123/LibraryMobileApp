import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
/**
 * @import screens
 */
import MainTab from '@root/screen/mainTab'
// import LoginScreen from '@root/screen/authentication/login'

/**
 * Auth screen stacks
 */
// const AuthStack = createStackNavigator()
// const AuthStackScreen = () => (
//   <AuthStack.Navigator>
//     <AuthStack.Screen
//       name="Login"
//       component={LoginScreen}
//       options={{
//         headerShown: false
//       }}
//     />
//   </AuthStack.Navigator>
// )

/**
 * Screen stacks after user login
 */
const FlowStack = createStackNavigator()
const FlowStackScreen = () => (
  <FlowStack.Navigator>
    <FlowStack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
  </FlowStack.Navigator>
)

/**
 * Master stacks
 */
const RootStack = createStackNavigator()
const RootStackScreen = ({ userToken }: { userToken?: string }) => (
  <RootStack.Navigator>
    {/* {userToken ? (
      <RootStack.Screen
        name="App"
        component={FlowStackScreen}
        options={{
          headerShown: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          headerShown: false
        }}
      />
    )} */}
    <RootStack.Screen
      name="App"
      component={FlowStackScreen}
      options={{
        headerShown: false
      }}
    />
  </RootStack.Navigator>
)

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}
