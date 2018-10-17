import React, { Component } from 'react'; 
import { Text, View, AppRegistry } from 'react-native';

export default class Component1 extends Component {
    constructor(){
        super();
        this.state = {
            country: "Japan"
        }
    }
  render(){
    return(
        <Text style={this.props.style} style={{top:100}} >
          {this.props.message} {this.state.country}
        </Text>
    )
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('Component1', () => Component1)