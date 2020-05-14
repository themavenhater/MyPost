import React, {useState} from 'react';
import { Alert, AsyncStorage, Image, Picker, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import setAuthToken from "../utils/setAuthToken";
//import axios from "axios";
//import BACKEND_URL from "../consts";


const AuthScreen = (props) => {

    const [state, setState] = useState({
                wilaya: 'Wilaya...',
                job: 'Poste de travail...',
                wilayas: [
                    'Wilaya...',
                    'Alger',
                    'Oran',
                    'Annaba',
                    'Wagadougou'     
                ],
                jobs: [
                    'Poste de travail...',
                    'guichetier',
                    'caissier ',
                    'receveur',
                    'facteur'
                ]
            })

    const handleRegister = () => {

        if (state.job == 'Poste de travail...' || state.wilaya == 'Wilaya...') {
            return Alert.alert('erreur', 'Veuillez compléter le formulaire')
        }
        const user = {
            job: state.job,
            wilaya: state.wilaya
        }
        AsyncStorage.setItem("user", JSON.stringify(user))
        props.navigation.push("Home", {
            user: user
        })
        
    }
    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
                <View style={{flex: .08}} />
                    <View style={styles.viewOne} >
                        <Image source={require("../assets/images/fullLogo.png")} style={styles.image} />
                    </View>
                <View style={{flex:.05}}>
                    <Text style={styles.text}>Veuillez compléter le formulaire</Text>
                </View>
                <View style={styles.viewTwo}>
                    <View style={styles.buttonWhite}>
                        <Picker
                            selectedValue={state.wilaya}
                            onValueChange={(itemValue) => setState({...state,wilaya: itemValue})}>
                            {state.wilayas.map( (v,i)=>{
                                return <Picker.Item label={v} value={v} key={i}/>
                            })}
                        </Picker>
                    </View>
                    <View style={styles.buttonWhite}>
                        <Picker
                            selectedValue={state.job}
                            onValueChange={(itemValue) => setState({...state, job:itemValue})}>{
                            state.jobs.map( (v,i)=>{
                                return <Picker.Item label={v} value={v} key={i} />
                            })}
                        </Picker>
                    </View>
                </View>
                <View style={styles.viewThree} >
                    <TouchableOpacity onPress={handleRegister}>
                        <View style={styles.button}>
                            <Text style={styles.confirm}>CONFIRMER</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        ) 
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch"
    },
    viewOne: {
        flex: 0.32,
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor: "gray",  
        paddingHorizontal: 20
    },
    viewTwo: {
        flex: 0.3,
        justifyContent:'space-evenly',
        alignItems:'center',
        //backgroundColor: "gray",  
        //paddingHorizontal: 20
    },
    viewThree:{
        flex: .1,
        //backgroundColor:'red',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    text: {
        textAlign:'center',
        color: 'black',
        fontSize: 23,
    },
    confirm:{
        textAlign:'center',
        color: 'white',
        fontSize: 23,
    },
    image: {
        width: "100%",
        height: "50%",
        resizeMode: "stretch"
    },
    buttonWhite:{
        height: '25%', 
        width: '70%', 
        borderColor: '#025ba3', 
        borderRadius: 20,
        borderWidth:1,
        backgroundColor: 'white',        
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
    button:{
        flex:.85,
        paddingHorizontal:40,
        borderRadius:20,
        backgroundColor: '#025ba3',
        justifyContent:'center',
        alignItems:'center',
        //shadow styling
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }
  })
  
export default AuthScreen
