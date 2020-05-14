import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking } from "react-native";
import Card from "../Components/Card"
const {height} = Dimensions.get('window')

const CpScreen= (props) => {

    return(
        <View style={{flex:1}}>
            <View style={{flex:.03}}/>
            <View style={styles.goBack}>
                <View style={{flex:.04}}/>
                <TouchableOpacity 
                    style={styles.backBtn} 
                    onPress={()=> props.navigation.goBack()}> 
                    <Image source={require('../assets/images/menu.png')} style={styles.image} />
                </TouchableOpacity>
                <Text style={{flex:1 ,textAlign: 'center' ,fontSize:26}}>Comité de participation</Text>
                <View style={{flex:.14}}/>
            </View>
            <View style={{flex:1,justifyContent:'center', marginHorizontal:10, backgroundColor: '#e8e8e8',}}>
            <ScrollView style={{height: height - 200, backgroundColor: '#e8e8e8',}}>
                <Card
                    navigation={props.navigation}
                    next="ServiceDetail"
                    title="formulaire"
                    icon= "ios-create"
                />
                <Card
                    navigation={props.navigation}
                    next="ServiceDetail"
                    title="Omra"
                    icon="md-checkmark-circle"
                />
                <Card
                    navigation={props.navigation}
                    next="ServiceDetail"
                    title="Notes"
                    icon="ios-chatboxes"
                />
                <Card
                    navigation={props.navigation}
                    next="ServiceDetail"
                    title="Convention"
                    icon="ios-folder"
                />
                <Card
                    navigation={props.navigation}
                    next="ServiceDetail"
                    title="Vacances"
                    icon="ios-star"
                />
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    goBack:{
        flex: .07,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection:'row',
        borderBottomWidth: 5,
        borderColor: 'rgba(0,90,170,1)'
    },
    backBtn:{
        flex:.1, 
        justifyContent:'flex-start', 
        alignItems:'center', 
        padding:8, 
        borderRadius:50,
    },
    image:{
        flex:.7,
        resizeMode: "contain",
    },
    OneView:{
        margin: 10,
        backgroundColor: "white",
        borderRadius:10,
        padding: 5,
        //shadow styling
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    title: {
        fontSize: 30,
        borderBottomColor: 'rgba(0,90,170,1)',
        borderBottomWidth: 1,
    },
    points: {
        fontSize:16,
        marginTop:11,
        paddingLeft:5
        // borderColor:'black',
        // borderWidth:1
    }

})

export default CpScreen