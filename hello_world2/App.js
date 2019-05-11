import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
export default class App extends React.Component {
  _onPress = () => {
    alert('hi');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Thank you for using React Native expo.</Text>
        <Image
          onPress={this._onPress}
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
          style={{ width: 100, height: 100, marginTop: 20 }}
        />

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPress}
            title="Hello"
            color="black"
            accessibilityLabel="Tap on Me"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 10
  }
});
