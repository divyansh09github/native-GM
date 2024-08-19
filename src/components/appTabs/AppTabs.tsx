import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
import routes from '../../routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const AppTabs = ({navigation}: NativeStackScreenProps<{}>) => {

  useEffect(() => {
    checkSignIn();
  }, []);

  const checkSignIn = async () => {
    try {
        await AsyncStorage.removeItem('userData')
        let userData = await AsyncStorage.getItem('userData');
        if(!userData) {
            navigation.navigate('sign_in');
        } else {
            console.log(JSON.parse(userData))
        }
    } catch(error) {
        console.log(error)
    }
  };

  return (
    <Tab.Navigator
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
            const label = route.name;
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
              tabBarIcon: ({color, size}) => {
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
    </Tab.Navigator>
  );
};

export default AppTabs;

const styles = StyleSheet.create({});
