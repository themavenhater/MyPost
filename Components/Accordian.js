import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
// import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={"#005AAA"} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
                </View>
            }
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: "#000",
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: "white",
        borderWidth:1,
        borderColor:"#005AAA"
    },
    parentHr:{
        height:1,
        color: "white",
        width:'100%'
    },
    child:{
        backgroundColor: "white",
        padding:16,
    }
    
});