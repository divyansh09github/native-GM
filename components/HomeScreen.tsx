// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NativeStackScreenProps } from '@react-navigation/native-stack'
// type HomeProps = NativeStackScreenProps<>
// const HomeScreen = ({navigation}) => {
//   return (
//     <>
//     <View>
//       <Text>HomeScreen</Text>
//     </View>
//     <View><Button title='Press' onPress={navigation.navigate('')}></Button></View></>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({})

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
import {InstagramSans} from 'react-native-fonts';
type HomeProps = NativeStackScreenProps<{}>;

const HomeScreen = ({navigation}: HomeProps) => {
  return (
    <>
      <View style={{padding: 15}}>
        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              fontWeight: '600',
              fontFamily: InstagramSans,
            }}>
            Instagram
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 50,
                  borderColor: 'magenta',
                  borderWidth: 2,
                }}>
                <Image
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                  }}
                  style={{height: 56, width: 56, borderRadius: 50}}
                />
              </View>
            </Pressable>
            <Text style={{fontSize: 12}}>username</Text>
          </View>
        </ScrollView>
      </View>
      <ScrollView style={{padding: 0}}>
        <View>
        <View style={{paddingHorizontal: 5, paddingVertical: 3, flex: 1, flexDirection: 'row', alignItems: 'baseline'}}>
          <Pressable
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'white',
                margin: 5,
                borderRadius: 50,
                borderColor: 'magenta',
                borderWidth: 2,
              }}>
              <Image
                source={{
                  uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
                }}
                style={{height: 26, width: 26, borderRadius: 50}}
              />
            </View>
          </Pressable>
          <Text style={{fontSize: 12}}>username</Text>
        </View>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: 'https://t4.ftcdn.net/jpg/03/10/50/59/360_F_310505927_CJOv9TmyF59bAkBsN17XXnhAz9AtRFdU.jpg',
            }}
            style={{flex: 1, height: 350}}
          />
        </View>
        </View>
      </ScrollView>
      <View>
        <Button
          title="To Profile screen"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
