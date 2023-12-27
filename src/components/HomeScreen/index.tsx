import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreenNavbar from './HomeScreenNavbar';
// import {InstagramSans} from 'react-native-fonts';
type HomeProps = NativeStackScreenProps<{}>;

const HomeScreen = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView>
        <HomeScreenNavbar />
    {/* <View><Text>hello HOme```````````````````````````````````````````````````````````````````````````````````````</Text></View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
