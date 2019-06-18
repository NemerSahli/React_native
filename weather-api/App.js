import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  Button,
  Keyboard,
  TouchableHighlight,
  ScrollView
} from 'react-native';

export default class WeatherApi extends Component {
  constructor(props) {
    super(props);
    this.state = { city: '', weather: null };
  }
  getWeather = () => {
    if (this.state.city === '') return;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.city
      }&APPID=e5002d2707d4e4c39ab8079b3982d719&units=metric`
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.cod === '404') {
          alert(responseJson.message);
          return;
        }
        this.setState({
          weather: responseJson
        });
        Keyboard.dismiss();
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
          <ScrollView style={{ flex: 1 }}>
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
                backgroundColor: 'rgba(255,255,255,.7)',
                textAlign: 'center'
              }}
              placeholder="City Name..."
              onChangeText={text => this.setState({ city: text })}
            />
            <TouchableHighlight onPress={this.getWeather}>
              <Text
                style={{
                  margin: 20,
                  alignSelf: 'center',
                  width: 60,
                  textAlign: 'center',
                  padding: 5,
                  borderColor: 'black',
                  borderRadius: 10,
                  backgroundColor: 'rgba(255,255,255,.8)'
                }}
              >
                Go
              </Text>
            </TouchableHighlight>

            {this.state.weather ? (
              <View
                style={{
                  flex: 1,
                  color: 'white',
                  alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 20, color: 'white' }}>
                  Temprature: {this.state.weather.main.temp}
                </Text>
                <Text style={{ fontSize: 20, color: 'white' }}>
                  speed: {this.state.weather.wind.speed} km/h
                </Text>
                <Text style={{ fontSize: 20, color: 'white' }}>
                  Humidit: {this.state.weather.main.humidity} %
                </Text>
                <Text style={{ fontSize: 20, color: 'white' }}>
                  description: {this.state.weather.weather[0].description}
                </Text>
              </View>
            ) : null}
          </ScrollView>
          <Text
            style={{
              width: '100%',
              position: 'absolute',
              bottom: 0,
              fontSize: 20,
              backgroundColor: 'black',
              color: 'white',
              textAlign: 'center'
            }}
          >
            &copy; Nemer EL-Sahli 2019
          </Text>
        </ImageBackground>
      </View>
    );
  }
}
