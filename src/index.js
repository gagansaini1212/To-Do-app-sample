import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import Dashboard from './screens/Dashboard'
import About from './screens/About'

const RootStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  About: {
    screen: About
  },
  
    initialRouteName: 'Dashboard',
});


const App = createAppContainer(RootStack);

export default App;