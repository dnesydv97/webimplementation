import {View, Text, Dimensions, Image, Platform} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Adjusted to use percentage for width
        height:
          Platform.OS === 'web' ? '100vh' : Dimensions.get('window').height, // Different height calculation for web vs. mobile
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap', // Ensure images wrap properly
          width: '100%',
          // height: '90%',
        }}>
        <Image
          style={{height: 50, width: 50, resizeMode: 'contain'}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={{height: 50, width: 50, resizeMode: 'contain'}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={{height: 50, width: 50, resizeMode: 'contain'}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={{height: 50, width: 50, resizeMode: 'contain'}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <Text>
        A React component for displaying different types of images, including
        network images, static resources, temporary local images, and images
        from local disk, such as the camera roll.
      </Text>
    </View>
  );
};

export default App;
