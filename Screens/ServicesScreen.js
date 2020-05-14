import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const {services} = require("../database/services.json")

export default class ServicesScreen extends React.Component {

    render(){       
        return(
            <View style={{flex:1}}>
                <View style={{flex:.03}}/>
                <View style={styles.goBack}>
                    <View style={{flex:.04}}/>
                    <TouchableOpacity
                        style={styles.backBtn} 
                        onPress={()=> this.props.navigation.goBack()}> 
                        <Image source={require('../assets/images/menu.png')} style={styles.image} />
                    </TouchableOpacity>
                    <Text style={{flex:1 ,textAlign: 'center' ,fontSize:30}}>Nos services</Text>
                    <View style={{flex:.14}}/>
                </View>
                <View style={{flex: .05}}/>
                <View style={styles.viewTwo}>
                    {Object.keys(services).map((x, i) =>
                    <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate("OneService",{service:x})} style={{...styles.miniCard, backgroundColor: services[x].color}}>
                        <Text style={{fontSize:25, color:'white',}}>SERVICE {x.toUpperCase()}</Text>
                    </TouchableOpacity>
                    )}
                </View>
            </View>
        )
    }
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
    viewTwo:{
        flex: .8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        },
    backBtn:{
        flex:.1, 
        justifyContent:'flex-start', 
        alignItems:'center', 
        padding:8, 
        borderRadius:50,
    },
    text:{
        color:'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 15
    },
    image:{
        flex:.7,
        resizeMode: "contain",
    },
    miniCard:{
        backgroundColor:'#dedede',
        width:"90%",
        height: "20%",
        borderRadius:15, 
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding:5,
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
})