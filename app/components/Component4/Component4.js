import React, {Component} from 'react'; 

import { Text, View, ListView, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    row : {
        flexDirection: "row",
        justifyContent: 'center',
        borderColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }

})

export default class Component4 extends Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds
        }
    }

componentDidMount(){
    this.fetchUsers();
}

    fetchUsers(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(response => {
            this.setState({
                userDataSource : this.state.userDataSource.cloneWithRows(response)
            })
        })
    }

    renderRow(user, sectionId, rowId, highlightRow){
        return (<View style={styles.row}>
            <Text style={styles.rowText}>
                {user.name}
            </Text>
        </View>)
    }
    render(){
        return( <ListView 
            dataSource={this.state.userDataSource}
            renderRow={this.renderRow.bind(this)}
            style = {{top: "10%", left:"20%"}}
            />

        )
    }
}
