import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store';
import routes from './src/routes';
import {BottomNavigation, PaperProvider} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from './src/components/auth/SignIn';
import AppTabs from './src/components/appTabs/AppTabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        {/* <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {routes.map(route => {
              return (
                <Stack.Screen
                  name={route.name}
                  component={route.component}
                  options={{headerShown: false}}
                  key={route.name}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="app">
          <Stack.Screen options={{headerShown: false}} name='sign_in' component={SignIn}/>
          <Stack.Screen options={{headerShown: false}} name='app' component={AppTabs}/>
          </Stack.Navigator>
          {/* <Tab.Navigator
            // screenOptions={{
            //   headerShown: false,
            // }}
            tabBar={({navigation, state, descriptors, insets}) => (
              <BottomNavigation.Bar
                navigationState={state}
                safeAreaInsets={insets}
                onTabPress={({route, preventDefault}) => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (event.defaultPrevented) {
                    preventDefault();
                  } else {
                    navigation.dispatch({
                      ...CommonActions.navigate(route.name, route.params),
                      target: state.key,
                    });
                  }
                }}
                renderIcon={({route, focused, color}) => {
                  const {options} = descriptors[route.key];
                  if (options.tabBarIcon) {
                    return options.tabBarIcon({focused, color, size: 24});
                  }
                  return null;
                }}
                getLabelText={({route}) => {
                  const {options} = descriptors[route.key];
                  // console.log(route,options)
                  const label = 
                    route.name
                    // options.tabBarLabel !== undefined
                    //   ? options.tabBarLabel
                    //   : options.title !== undefined
                    //   ? options.title
                    //   : route.name;

                  return label;
                }}
              />
            )}>
            {routes.map(route => {
              return (
                <Tab.Screen
                  name={route.name}
                  component={route.component}
                  options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                      // const imgUrl: string = `./assets/images/${route.tabBarIcon}`;
                      // console.log(imgUrl)
                      // return <Icon name={route.tabBarIcon} size={size} color={color} />;
                      return route.tabBarIcon;
                    },
                  }}
                  key={route.name}
                />
              );
            })}
          </Tab.Navigator> */}
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
