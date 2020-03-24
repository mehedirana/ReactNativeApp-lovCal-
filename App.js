import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import DisplayLove from './components/DisplayLove';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

class App extends Component {
  state() {
    fname: ''
    sname: ''
    data: "loading"
  }
  getData() {
    fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice",
      {
        // "method": "GET",
        "headers": {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key": "1cfc3d9cccmsh24237f3d43d59eep103a7bjsn11b10383e1b7"
        }
      }

    )
      .then(data => data.json())
      .then(data2 => {
        console.log(data2)
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header >

          <Appbar.Content
            style={{ alignItems: 'center' }}
            title="Love % Calculator"
            subtitle="Calculate your love %"
          />

        </Appbar.Header>
        <TextInput
          label="Person 1(Male)"
          value={this.state.fname}
          onChangeText={text => this.setState({ text })}

        />
        <TextInput
          label='Person 2(Female)'
          value={this.state.sname}
          onChangeText={text => this.setState({ text })}

        />
        <Button
          icon="mood"
          mode="contained"
          style={{ margin: 10 }}
          onPress={this.getData.bind(this)}>
          Calculate
       </Button>
       <DisplayLove/>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
