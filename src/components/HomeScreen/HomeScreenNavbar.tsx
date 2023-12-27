import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

const HomeScreenNavbar = () => {
    // use color scheme to use dynamic styling
    const colorScheme = useColorScheme();
  return (
    <View style={[styles.main, colorScheme == 'light' ? styles.lightbg : styles.darkbg]}>
      <Text style={styles.heading}>WhysApp</Text>
    </View>
  )
}

export default HomeScreenNavbar

const styles = StyleSheet.create({
    main: {
        height: 70,
        // backgroundColor: '#4da378',
        paddingHorizontal: 15,
        paddingBottom: 5,
        paddingTop: 22,
        borderBottomWidth: 2,
        borderBottomColor: '#2d8358'
    },
    lightbg: {
        backgroundColor: '#4da378',
    },
    darkbg: {
        backgroundColor: '#1d7348',
    },
    heading: {
        fontSize: 25,
        color: 'white',
        fontWeight: '700',
        letterSpacing: 1,
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    }
})