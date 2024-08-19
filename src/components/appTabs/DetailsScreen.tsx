import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// type Detailsprops = NativeStackScreenProps<{}>;

const DetailsScreen = ({navigation}: NativeStackScreenProps<{}>) => {
  return (
    <View>
      <Text>DetailsScreen</Text>
      <Button
          title="To Home screen"
          onPress={() => navigation.navigate('Home')}
        />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})