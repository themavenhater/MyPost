import React, {useState, useEffect} from 'react'
import { Alert, AsyncStorage, Image, Picker, StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';

const {services} = require("../database/services.json")
const {height} = Dimensions.get('window')

const OneServiceScreen = (props) => {

    const type = props.navigation.getParam("service",{})
    const {color, ...service} = services[type]
    
    return(
        <View style={{flex:1}}>
            <View style={{flex:.03}}/>
            <View style={styles.goBack}>
                <View style={{flex:.04}}/>
                <TouchableOpacity style={styles.backBtn} onPress={()=> props.navigation.goBack()}> 
                    <Image source={require('../assets/images/go-back.png')} style={styles.image} />
                </TouchableOpacity>
                <Text style={{flex:1 ,textAlign: 'center' ,fontSize:25, color: color}}> SERVICE {type.toUpperCase()} </Text>
                <View style={{flex:.14}}/>
            </View>
            <View style={{flex:1,justifyContent:'center', marginHorizontal:10, backgroundColor: '#e8e8e8',}}>
                <ScrollView style={{backgroundColor: '#e8e8e8', height: height - 200}}>
                    
                        {Object.keys(service).map((x, i) =>
                            <TouchableOpacity key={i} style={{...styles.miniCard, backgroundColor: color,borderColor: color,}} onPress={() => props.navigation.navigate("ServiceDetail")}>
                            <Image source={require('../assets/images/ccp.png')} style={{flex:.15, resizeMode:'contain'}} />
                            <View style={{flex:.8,borderRadius:10, justifyContent:'center'}}>
                        <Text style={{fontSize:18, color:'white', textAlign:'center'}}>{x.toUpperCase()}</Text>
                            </View>
                            <Image
                            style={{width: 50, height: 50, resizeMode:'contain'}}
                            source={{isStatic:true, uri: "file://../assets/images/padlock.png"}}
                            />
                        </TouchableOpacity>
                        )}
                        

                {
                /* <TouchableOpacity style={styles.miniCard} onPress={() => props.navigation.navigate("ServiceDetail")}>
                        <Image source={require('../assets/images/padlock.png')} style={{flex:.15, resizeMode:'contain'}} />
                        <View style={{flex:.8,borderRadius:10, justifyContent:'center'}}>
                            <Text style={{fontSize:18, color:'white', textAlign:'center'}}>OUVERTURE ET TENUE D’UN COMPTE CCP</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniCard} onPress={() => props.navigation.navigate("ServiceDetail")}>
                        <Image source={require('../assets/images/padlock.png')} style={{flex:.15, resizeMode:'contain'}} />
                        <View style={{flex:.8,borderRadius:10, justifyContent:'center'}}>
                            <Text style={{fontSize:18, color:'white', textAlign:'center'}}>OUVERTURE ET TENUE D’UN COMPTE CCP</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.miniCard}>
                        <Image source={require('../assets/images/shield.png')} style={{flex:.15, resizeMode:'contain'}} />
                        <View style={{flex:.8,borderRadius:10, justifyContent:'center'}}>
                            <Text style={{fontSize:18, color:'white', textAlign:'center'}}>OPERATIONS ADMISES SUR UN COMPTE CCP</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.miniCard}>
                    <Image source={require('../assets/images/ccp.png')} style={{flex:.15, resizeMode:'contain'}} />
                        <View style={{flex:.8,borderRadius:10, justifyContent:'center'}}>
                            <Text style={{fontSize:18, color:'white', textAlign:'center'}}>CLOTURE D’UN COMPTE CCP</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.miniCard}>
                        <Image source={require('../assets/images/cnep.png')} style={{flex:.15, resizeMode:'contain'}} />
                        <View style={{flex:.8,borderRadius:10, justifyContent:'center'}}>
                            <Text style={{fontSize:18, color:'white', textAlign:'center'}}>SERVICE D’EPARGNE CNEPs</Text>
                        </View>
                    </TouchableOpacity> */}

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
        flexDirection:'row'
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
    viewOne:{
        flex: .9,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    miniCard:{
        flexDirection: 'row',        
        height: 100,
        margin:10,
        padding: 5,
        borderRadius:15, 
        borderWidth:1,
        //borderColor: 'green',
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
export default OneServiceScreen