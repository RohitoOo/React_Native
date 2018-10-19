import React, { Component } from 'react'; 
import { AppRegistry, Text, View, TextInput, Switch, Alert } from "react-native";

export default class Component2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            textValue : "Hello iOS and Android Devices!!",
            alertProps : this.props.alertMessage
        }
    }
    onChangeText = (value) => {
        this.setState({
            textValue : value,
            switchValue: false
        })
    }
    onSwtichChange = (value) => {
        this.setState({
            switchValue: !this.state.switchValue
        })
        Alert.alert(this.state.alertProps)
    }
    render(){      
        return(
            <View style = {{top: "10%", left:"20%"}}>
                <TextInput
                placeholder = "Enter Text..."
                value={this.state.textValue}
                onChangeText={(value) => this.onChangeText(value)}
                />
                <Text>{this.state.textValue}</Text>
               <Switch value={this.state.switchValue}
                onValueChange={(value) => this.onSwtichChange(value)}
                />
            </View>
        )
    }
}