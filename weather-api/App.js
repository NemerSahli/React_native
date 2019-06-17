import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  Button
} from 'react-native';

export default class WeatherApi extends Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
  }
  getWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.city
      }&APPID=e5002d2707d4e4c39ab8079b3982d719&units=metric`
    )
      .then(response => response.json())
      .then(responseJson => {
        alert(JSON.stringify(responseJson.movies));
      })
      .catch(error => {
        console.error(error);
      });
  };
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
          <Text
            style={{
              fontSize: 50,
              marginTop: 30,
              textAlign: 'center',
              color: 'white'
            }}
          >
            Weather API
          </Text>
          <Text
            style={{
              backgroundColor: 'transparent',
              textAlign: 'center',
              fontSize: 30,

              padding: 40
            }}
          >
            Enter a City Name
          </Text>
          <TextInput
            style={{
              height: 40,
              color: 'black',
              backgroundColor: 'rgba(255,255,255,.5)',
              textAlign: 'center'
            }}
            placeholder="City Name..."
            onChangeText={text => this.setState({ city: text })}
          />
          <Button title="Go" onPress={this.getWeather} color="#841584" />
        </ImageBackground>
      </View>
    );
  }
}
