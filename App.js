import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import DisplayLove from './components/DisplayLove';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

class App extends Component {
  state = {
    fname: '',
    sname: '',
    result: "loading",
  }
  getData() {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
      //   "method": "GET",
        "headers": {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key": "1cfc3d9cccmsh24237f3d43d59eep103a7bjsn11b10383e1b7"
        }
      }

    )
      .then(data => data.json())
      .then(data2 => {
        console.log(data2)
        this.setState({result: data2})
      }
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header style ={{backgroundColor:'#6131ff'}} >

          <Appbar.Content
            style={{ alignItems: 'center' }}
            title="Love % Calculator"
            subtitle="Calculate your love %"
          />

        </Appbar.Header>
        <TextInput
          style ={{backgroundColor:'#fff'}}
          label="Person 1(Male)"
          value={this.state.fname}
          onChangeText={text => this.setState({fname: text})}

        />
        <TextInput
        style ={{backgroundColor:'#fff'}}
          label='Person 2(Female)'
          value={this.state.sname}
          onChangeText={text => this.setState({sname: text})}

        />
        <Button
          icon="mood"
          mode="contained"
          style={{ margin: 20, justifyContent:'center',backgroundColor:'#6131ff'}}
          onPress={this.getData.bind(this)}
          >
          Calculate
       </Button>
       <DisplayLove data ={this.state.result} />
      </View>
    )
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
