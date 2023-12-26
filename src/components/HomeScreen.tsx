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
// import {InstagramSans} from 'react-native-fonts';
type HomeProps = NativeStackScreenProps<{}>;

const HomeScreen = ({navigation}: HomeProps) => {
  return (
    <>
    <View><Text>hello HOme</Text></View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
