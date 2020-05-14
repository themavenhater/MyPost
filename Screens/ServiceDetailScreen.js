import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, TextInput, Modal, Alert, Picker, Button, KeyboardAvoidingView } from "react-native"
import React, {useState, useEffect} from "react"
import Accordian from '../Components/Accordian'
const services = require("../database/services.json")
var {height, width} = Dimensions.get('window');

const ServiceDetailScreen = (props) => {

    const reclamations = ["Type de retour","ــــ","type 1", "type 2", "type 3"]

    const [reclamation, setReclamation] = useState(reclamations[0])
    const [value, onChangeText] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false)

    const faq =[
        { 
          title: 'Comment commander la carte EDAHABIA ?', 
          data: '* Renseigner le formulaire «commande de carte\n* Valider les informations saisies\n* Recevoir instantanément un SMS contenant un code de confirmation\n* Saisir et valider le code de confirmation sur le site web\n* Editer le reçu justifiant la commande de la carte',
        },
        { 
          title: 'Problème de retrait au niveau du GAB ?',
          data: '* Veuillez se rapprocher de l’établissement postal ou la transaction de retrait s’est effectuée muni de votre pièce d’identité\n* Renseigner le formulaire de la réclamation disponible au niveau de l’établissement postal par les informations nécessaires demandées.'
        },
        { 
         title: 'Montant maximum autorisé en retrait sur GAB ?',
         data: 'Plafond journalier de 50 000 DA'
        },
        { 
          title: 'Qu’est qu’une carte de retrait ?',
          data: 'La carte de retrait permet d’effectuer des retraits d’espèces sur l’ensemble des automates d’Algérie Poste.'
        },
      ]

    const renderAccordians= () => {
        const items = [];
        let i = 0
        for (item of faq) {
            items.push(
                <Accordian 
                    key= {i}
                    title = {item.title}
                    data = {item.data}
                />
            );
            i++
        }
        return items;
    }
    const hideModal = (alert) => {
        setReclamation("")
        onChangeText("")
        setModalVisible(false)
        if (alert) Alert.alert('Retour','votre retour a bien été envoyé')
    }

    const service = {
        brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at aliquet orci. Morbi a metus eu odio accumsan cursus. Pellentesque eget ullamcorper enim. Cras elementum elit eu felis scelerisque, in pharetra erat mollis. Maecenas vel eleifend tellus. In fringilla orci id tincidunt posuere. Nunc porta vulputate nisi sed sagittis. In et tincidunt ex. Duis a orci ultricies, sodales est et, tempor dolor. Maecenas iaculis lacus non ante tristique commodo. Quisque faucibus cursus tortor, facilisis faucibus erat vestibulum a. Mauris sem enim, pharetra vel porttitor quis, condimentum sed metus. Nam congue ligula id felis imperdiet lobortis. Phasellus pulvinar ultrices mi, eu vestibulum tellus tincidunt a."
    }

    return(
        <View style={{flex:1}}>
            
            <View style={{flex:.03}}/>
            <View style={styles.goBack}>
                <View style={{flex:.04}}/>
                <TouchableOpacity style={styles.backBtn} onPress={()=> props.navigation.goBack()}> 
                    <Image source={require('../assets/images/go-back.png')} style={styles.image} />
                </TouchableOpacity>
                <Text style={{flex:1 ,textAlign: 'center' ,fontSize:30}}> </Text>
                <View style={{flex:.14}}/>
            </View>
            <View style={{flex:1,justifyContent:'center', marginHorizontal:10}}>
                    <ScrollView style={{height: height - 200}}>
                        <View style={styles.innerImage}>
                        <Text style={styles.title}>COMMANDER UNE CARTE EDAHABIA</Text>
                        <Text style={styles.header}>Présentation</Text>
                        <View style={{borderBottomColor: 'black',borderBottomWidth: 1, width:"50%",alignSelf: 'center',marginBottom: 10}}/>
                        <Text style={styles.description}>{service.brief}</Text>
                        </View>
                        <View style={styles.innerImage}>
                            <Text style={styles.header}>Procédure</Text>
                            <View style={{borderBottomColor: 'black',borderBottomWidth: 1, width:"50%",alignSelf: 'center',marginBottom: 10}}/>
                            <Text style={{marginLeft:15, fontSize:20, fontWeight: 'bold', textAlign:'left'}}>1 - A l’ouverture d’un compte ccp</Text>
                            <Text style={styles.description}>Dans un Bureau de Poste, lors de l'ouverture d'un compte CCP :</Text>
                            <Text style={styles.list}>• Cocher la case « Délivrance d’une carte monétique » indiqué sur le formulaire de la demande d'ouverture d'un compte CCP fourni par le Bureau de poste.</Text>
                            <Text style={styles.list}>• Renseigner votre numéro de téléphone mobile.</Text>
                            <Text style={styles.description}>Un SMS de confirmation de l'ouverture de votre compte CCP vous indiquera la disponibilité de votre carte et de son code pin dans le Bureau de Poste de votre résidence.</Text>
                            <Text style={{marginLeft:15, fontSize:20, fontWeight: 'bold'}}>2 - Sur le site web d’Algérie Poste</Text>
                            <Text style={styles.description}>Dans l'espace EDAHABIA (edcarte.poste.dz).</Text>
                            <Text style={styles.description}>Les étapes sont à suivre pour l'enregistrement de votre demande:</Text>
                            <Text style={styles.list}>• Fournir les informations exactes sur votre compte CCP.</Text>
                            <Text style={styles.list}>• Fournir votre numéro de téléphone mobile (obligatoire).</Text>
                            <Text style={styles.list}>• Lire et cocher la case « J’accepte les conditions d’utilisation de la carte EDAHABIA ».</Text>
                            <Text style={styles.list}>• Saisir le code « OTP » envoyé par SMS sur votre téléphone mobile.</Text>
                            <Text style={styles.description}>Votre commande sera traitée et vous serez informé par SMS de la disponibilité de votre carte et du code pin dans le bureau de poste de votre résidence.</Text>
                        </View>
                        <View style={styles.innerImage}>
                            <View style={{paddingTop:50, paddingBottom:50, paddingHorizontal:5}}>
                                <Text style={styles.header}>Foire aux questions</Text>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 1, width:"50%",alignSelf: 'center',marginBottom: 10,}}/>
                                { renderAccordians() }
                            </View>
                        </View>

                        <View>
                            <TouchableOpacity onPress={()=> setModalVisible(true)}>
                                <View style={styles.button}>
                                    <Text style={styles.confirm}>Envoyer un retour</Text>
                                </View>
                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => hideModal()}>
                                    <ScrollView 
                                    style={{backgroundColor: 'rgba(255,255,255,0.8)', flex:1}}
                                    >
                                        <View style={{height: height/4}} >
                                            <TouchableOpacity onPress={()=> hideModal()} style={{flex:1}}/>
                                        </View>
                                        <View style={{backgroundColor:'#025ba3', margin: 20, borderRadius:10, paddingHorizontal: 20 }}>
                                            <Text style={{color:"white", fontSize:20, alignSelf:"center", marginVertical:10, marginBottom:20 }}>Veuillez remplir les champs dessus</Text>
                                            <View style={styles.buttonWhite}>
                                                <Picker
                                                    selectedValue={reclamation}
                                                    onValueChange={(itemValue) => setReclamation(itemValue)}>{
                                                    reclamations.map( (v,i)=>{
                                                        return <Picker.Item  label={v} value={v} key={i} />
                                                    })}
                                                </Picker>
                                            </View>
                                            <TextInput 
                                                editable 
                                                maxLength={200}
                                                multiline
                                                numberOfLines={5}
                                                onChangeText={text => onChangeText(text)}
                                                value={value}
                                                style={styles.textinput}
                                                placeholder='ajouter une description'
                                            />
                                            <Button
                                                title="Envoyer"
                                                onPress={() =>hideModal(true)}
                                                />
                                        </View>
                                        <View style={{height: height/4}} >
                                            <TouchableOpacity onPress={()=> hideModal()} style={{flex:1}}/>
                                        </View>
                                    </ScrollView>
                                </Modal>
                        </View>
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
    textinput: {
        borderColor:"white",
        borderWidth:1,
        width: "100%",
        marginBottom:20,
        alignSelf: 'center',
        paddingHorizontal: 5,
        textAlign:'left',
        backgroundColor:"white",
        color: '#025ba3' 
    },
    buttonWhite:{
        marginBottom:20,
        height: '15%', 
        width: '100%', 
        borderColor: '#025ba3', 
        borderRadius: 20,
        borderWidth:1,
        backgroundColor: 'white',
        alignSelf:'center',
        justifyContent: 'center'  
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
    innerImage: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        margin: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
        margin: 10,
    },
    description: {
        margin: 18,
        marginTop: 7,
        textAlign: 'justify',
    },
    list: {
        marginHorizontal:18,
        marginBottom: 2,
        textAlign: 'left',
    },
    confirm:{
        textAlign:'center',
        color: 'white',
        fontSize: 20,
    },
    button:{
        width:"80%",
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        paddingHorizontal:40,
        marginBottom: 20,
        borderRadius:20,
        backgroundColor: '#025ba3',
    },
    modal:{
        justifyContent:'center',
        alignItems:'center',
    }
})

export default ServiceDetailScreen