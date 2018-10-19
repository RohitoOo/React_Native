import React, { Component } from 'react'; 
import { Text, View, AppRegistry, StyleSheet, TouchableOpacity, Alert, TouchableHighlight, TextInput } from 'react-native';
import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';
import Component4 from './app/components/Component4/Component4';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  parentView : {
    flexDirection : "row", 
    height: "100%" 
  },
  view1 : {
    flex : 1, backgroundColor: "red"  
  },
  view2 : {
    flex : 1, backgroundColor: "white"  
  },
  view3: {
    flex : 1, backgroundColor: "red"  
  }

});


export default class myapp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Editable Text' };
  }

  _buttonPressAction() {
    console.log("Area Pressed")
  }
  _buttonPressAction2(){
    console.log("Area 2 Pressed")
  }
  render(){
    return(
      <Component4/>
      // <Component3/>

      // <Component2 alertMessage={"Hello From Parent Component"}/>

      // <View style={styles.parentView} > 
      // <TouchableHighlight 
      // style={styles.view1} onPress={this._buttonPressAction}
      // underlayColor= "blue"
      // >
      //     <View  >
      //       <Text style={{top:100}}>
      //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eveniet? Obcaecati autem atque, blanditiis fugiat similique, et eaque qui repellendus nemo saepe, natus aperiam ipsam sint? Animi iusto dicta excepturi?
      //       </Text>
      //     </View >
      // </TouchableHighlight> 
      //    <TouchableOpacity style={styles.view2}
      //     onPress={this._buttonPressAction2}
      //     activeOpacity= {0}
      //    > 
      //     <View >
      //       <Text style={{top:200}}>
      //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eveniet? Obcaecati autem atque, blanditiis fugiat similique, et eaque qui repellendus nemo saepe, natus aperiam ipsam sint? Animi iusto dicta excepturi?
      //       </Text>
      //     </View>
      //     </TouchableOpacity>           
      //     <View style={styles.view3}>
          
      //       <TextInput
      //        multiline = {true}
      //         style={{height: "90%", borderColor: 'black', borderWidth: 1, top:"5%"}}
      //         onChangeText={(text) => this.setState({text})}
      //         value={this.state.text}
      //       />
  
      //     </View>      
      // </View>
    )
  }
}

// AppRegistry.registerComponent('myapp', () => myapp);