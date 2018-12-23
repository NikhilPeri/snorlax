import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      loggingText: ''
    };

    this.toggleRecording = this.toggleRecording.bind(this);
    this.buttonText = this.buttonText.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.toggleRecording} title={this.buttonText()} />
        <Text>{this.state.loggingText}</Text>
      </View>
    );
  }

  toggleRecording() {
    this.setState({recording: !this.state.recording});
  }

  record() {
    const recording = new Expo.Audio.Recording();
    try {
      await recording.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      // You are now recording!
    } catch (error) {
      // An error occurred!
    }
  }

  buttonText() {
    if (this.state.recording) {
      return 'Stop Recording';
    } else {
      return 'Start Recording';
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {},

});
