import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Profileprops = NativeStackScreenProps<{}>;

const ProfileScreen = ({navigation}: Profileprops) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
          title="To Details screen"
          onPress={() => navigation.navigate('Details')}
        />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})