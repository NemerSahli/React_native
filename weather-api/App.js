import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

export default class WeatherApi extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 50 }}>Weather API</Text>
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/favicon.png',
            width: 64,
            height: 64
          }}
        />
      </ScrollView>
    );
  }
}
