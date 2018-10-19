import React, {Component} from 'react'; 

import {AppRegistry, Text, View, ListView } from 'react-native';

const userNames = [
    {name : "Rohito Bhambhani"},
    {name : " Bhambhani"},
    {name : "Rohito "},
    {name : "John Doe"},
]

export default class Component3 extends Component {
    constructor(){
        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          userDataSource: ds.cloneWithRows(userNames),
        };
    }
    renderRow(user, sectionId, rowId, highlightRow){
        return (<View>
            <Text>
                {user.name}
            </Text>
        </View>)
    }
    
    render(){
        return(
            <ListView 
            dataSource={this.state.userDataSource}
            renderRow={this.renderRow.bind(this)}
            style = {{top: "10%", left:"20%"}}
            >
                <Text>
                    Hello From Component3
                </Text>
            </ListView>
        )
    }
}