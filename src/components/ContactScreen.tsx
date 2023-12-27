import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

const ContactScreen = ({navigation}: NativeStackScreenProps<{}>) => {
  return (
    <View>
      <Text>ContactScreen</Text>
      <Button
          title="To Home screen"
          onPress={() => navigation.navigate('Home')}
        />
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({})