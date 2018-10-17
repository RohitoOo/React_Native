import React, { Component } from 'react'; 
import { Text, View, AppRegistry, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Component1 from './app/components/Component1/Component1'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  outerCircle: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderRadius: 100/2,
    alignContent: "center"
  },
  innerCircle: {
    backgroundColor: 'red',
    width: 100,
    height: 80,
    borderRadius: 80/2,
  }
});


export default class myapp extends Component {

  _buttonPressAction() {
    Alert.alert("Wassup Dock!?");
  }
  render(){
    return(
      <TouchableOpacity 
                        onPress={this._buttonPressAction}
                        style={styles.container}>
                        <Component1 style={styles.container}/>
          <View style={styles.innerCircle} />
          
      </TouchableOpacity>
     
    )
  }
}

// AppRegistry.registerComponent('myapp', () => myapp);