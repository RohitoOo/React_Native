// import React, {Component} from 'react'; 

// import {AppRegistry, Text, View, ListView, StyleSheet, SectionList, StyleSheet } from 'react-native';

// const userNames = [
//     {name : "Rohito Bhambhani"},
//     {name : " Bhambhani"},
//     {name : "Rohito "},
//     {name : "John Doe"},
// ]

// const styles = StyleSheet.create({
//     row : {
//         flexDirection: "row",
//         justifyContent: 'center',
//         borderColor: '#f4f4f4',
//         marginBottom: 3
//     },
//     rowText: {
//         flex: 1
//     }

// })

// export default class Component3 extends Component {
//     constructor(){
//         super();

//         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.state = {
//           userDataSource: ds.cloneWithRows(userNames),
//         };
//     }
//     // renderRow(user, sectionId, rowId, highlightRow){
//     //     return (<View style={styles.row}>
//     //         <Text style={styles.rowText}>
//     //             {user.name}
//     //         </Text>
//     //     </View>)
//     // }
    
//     render(){
//         return(
//             // <ListView 
//             // dataSource={this.state.userDataSource}
//             // renderRow={this.renderRow.bind(this)}
//             // style = {{top: "10%", left:"20%"}}
//             // >
//             //     <Text>
//             //         Hello From Component3
//             //     </Text>
//             // </ListView>
//             <SectionList
//                 style = {{top: "10%", left:"20%", }}
//                 renderItem={({item, index, section}) => <Text key={index} style={{padding:10}}> - {item}</Text>}
//                 renderSectionHeader={({section: {title}}) => (
//                     <Text style={{fontWeight: 'bold'}}>{title}</Text>
//                 )}
//                 sections={[
//                     {title: 'Title1', data: ['item1', 'item2']},
//                     {title: 'Title2', data: ['item3', 'item4']},
//                     {title: 'Title3', data: ['item5', 'item6']},
//                 ]}
//                 keyExtractor={(item, index) => item + index}
//             />
//         )
//     }
// }