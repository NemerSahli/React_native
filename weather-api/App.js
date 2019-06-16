import React, { Component } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';

export default class WeatherApi extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={{
            uri:
              'https://images.pexels.com/photos/1743398/pexels-photo-1743398.jpeg?cs=srgb&dl=4k-wallpaper-calm-environment-1743398.jpg&fm=jpg'
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <Text style={{ fontSize: 50, textAlign: 'center', color: 'white' }}>
            Weather API
          </Text>
          <Text
            style={{
              backgroundColor: 'transparent',
              textAlign: 'center',
              fontSize: 30,
              color: 'white',
              padding: 40,
              flex: 1
            }}
          >
            some text will be here!
          </Text>
        </ImageBackground>
      </View>
    );
  }
}
