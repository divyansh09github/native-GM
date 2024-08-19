import React from 'react';
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {InstagramSans} from 'react-native-fonts';
type HomeProps = NativeStackScreenProps<{}>;

const HomeScreen = ({navigation}: HomeProps) => {
  return (
    <>
    <View><Text>hello HOme</Text></View>
    <Image source={require('../../../assets/images/home.png')} style={{width: 40, height: 40}}/>
    <Icon name="home" size={24} color={'red'}/>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
