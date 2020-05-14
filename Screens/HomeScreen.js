import React, { useState } from 'react';
import { View,
    StyleSheet,Text,
    ImageBackground,
    TextInput,
    AsyncStorage,
    Image,
    Alert,
    TouchableOpacity,
    Modal,
    KeyboardAvoidingView 
} from 'react-native'
import { FontAwesome} from '@expo/vector-icons';

// import setAuthToken from "../utils/setAuthToken";
// import axios from "axios";
// import BACKEND_URL from "../consts";

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text:  '',
            job: '',
            wilaya: '',
            modalVisible: false,
        }
    }

    async componentDidMount(){
        const {job, wilaya} = await this.props.navigation.getParam("user",{})
        if (job == '') this.props.navigation.push("Auth")
        this.setState({job:job, wilaya:wilaya})
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    >
                        <View style={{height:"100%", backgroundColor: 'rgba(255,255,255,0.8)', flexDirection:'column-reverse'}}>
                            <View style={{height:"16%", backgroundColor:'#005AAA',paddingVertical:20, paddingHorizontal:20, justifyContent:'space-between'}}>
                                <TouchableOpacity onPress={()=> alert('Prochainement disponible')} style={{borderWidth:1, padding: 3, borderColor:'white', borderRadius:15}}>
                                    <Text style={{fontSize:25, textAlign:'right', color:'white'}}>{'changer de langue (العربية)'.toUpperCase()}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress= {()=> this.props.navigation.push("Auth")} style={{borderWidth:1, padding: 3, borderColor:'white', borderRadius:15}}>
                                    <Text style={{fontSize:28, textAlign:'right', color:'white'}}>{"se déconnecter".toUpperCase()}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress= {() => this.setState({modalVisible:false}) } style={{height:'84%'}}/>
                        </View>
                </Modal>
                <View style={styles.container}>
                    <View style={{height: "10%", backgroundColor:'#4A90E2', justifyContent: 'center', flexDirection:'row', alignItems:'center',paddingTop:20}}>
                        <Text style={styles.poste}>Algérie poste</Text>
                        <FontAwesome name="user-circle" size={35} color="black" style={{marginLeft: 70,}}
                                    onPress={()=>{ this.setState({modalVisible:true})}}
                        />
                    </View>
                    <View style={{height: "10%", justifyContent: 'center'}}>
                        <TextInput 
                        placeholder="recherche"
                        maxLength = {30}
                        value= {this.state.text}
                        style={styles.inputStyle} />
                    </View>
                    <View style={{height: "60%", justifyContent: 'space-evenly',}}>
                        <Text style={{fontSize:25, textAlign:'center'}}>Bonjour {this.state.job} de {this.state.wilaya}</Text>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Services")}>
                                <View style={styles.button}>
                                    <Image source={require("../assets/images/service.png")} style={styles.image} />
                                    <Text style={styles.text}>Nos services</Text>    
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate("News") }>
                                <View style={styles.button}>
                                    <Image source={require("../assets/images/news.png")} style={styles.image} />
                                    <Text style={styles.text}>L'actualité</Text>    
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate("Cp")}>
                                <View style={styles.button}>
                                    <Image source={require("../assets/images/community.png")} style={styles.image} />
                                    <Text style={styles.text}>Actions sociale</Text>    
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("HumanRessources")}>
                                <View style={styles.button}>
                                    <Image source={require("../assets/images/target.png")} style={styles.image} />
                                    <Text style={styles.text}>RH</Text>    
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#D5D5D5",
    },
    row: {
        flex: .3,
        flexDirection:'row',
        //backgroundColor:'black',
        justifyContent: 'space-evenly',
        alignItems: 'center'
        },
    text: {
        textAlign:'center',
        color: 'black',
        fontSize: 18,
    },
    button: {
        width:150,
        height:150,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderColor: "rgba(0,90,170,1)",
        borderWidth:5,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        //shadow styling
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 5,
    },
    image: {
        width: "50%",
        height: "50%",
        resizeMode: "stretch"
    },
    poste: {
        color: "rgba(255,255,255,1)",   
        fontSize: 30,
        textAlign: "right",
        marginLeft: 70,
    },
    inputStyle: {
        width: 310,
        height: 42,
        color: "#000",
        alignSelf: "center",
        paddingLeft: 10,
        fontSize: 16,
        lineHeight: 16,
        backgroundColor: "#fff",
    },
  })
  