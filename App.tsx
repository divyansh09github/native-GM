import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen';
import ProfileScreen from './src/components/ProfileScreen';
import ContactScreen from './src/components/ContactScreen';
import DetailsScreen from './src/components/DetailsScreen';
import {Provider} from 'react-redux';
import store from './src/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
