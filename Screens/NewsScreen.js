import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, View } from 'react-native';
import ArticleCard from '../Components/ArticleCard'
const {height} = Dimensions.get('window')
const {news} = require("../database/services.json")
export default class NewsScreen extends React.Component {
    
    render() {

        return (
            <View style={{flex:1}}>
                <View style={{flex:.03}}/>
                <View style={styles.goBack}>
                    <View style={{flex:.04}}/>
                    <TouchableOpacity 
                        style={styles.backBtn} 
                        onPress={()=> this.props.navigation.goBack()}> 
                        <Image source={require('../assets/images/menu.png')} style={styles.image} />
                    </TouchableOpacity>
                    <Text style={{flex:1 ,textAlign: 'center' ,fontSize:30}}>L'actualité</Text>
                    <View style={{flex:.14}}/>
                </View>
                <View style={{flex:1,justifyContent:'center', marginHorizontal:10, backgroundColor: '#e8e8e8',paddingBottom:20}}>
                <ScrollView style={{height: height - 200, backgroundColor: '#e8e8e8',}}>
                    <View style={styles.viewOne}>
                        <TouchableOpacity style={styles.card} onPress={()=> this.props.navigation.navigate("Article")} >
                            <ImageBackground source={require('../assets/article.jpg')} style={styles.imgbck} 
                                imageStyle={{opacity: 0.4, borderRadius:15, backgroundColor: 'rgb(0,0,0)'}}>
                                <Text style={{...styles.text,fontSize:22}}>Nouveau service CARDLESS</Text>
                                <Text style={{...styles.text,fontSize:18}}>Algérie Poste informe son aimable clientèle que Le retrait sans carte sur le GAB est désormais possible...</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    {news.map((article, i) => 
                        <ArticleCard key={i} title={article.title} description={article.description} navigation = {this.props.navigation} tags={article.tags} />
                    )}
                                   
            </ScrollView>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: .87,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch"
    },
    goBack:{
        flex: .07,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection:'row',
        borderBottomWidth: 5,
        borderColor: 'rgba(0,90,170,1)',
        marginBottom:10
    },
    viewOne:{
        height: 200,
        width: "100%",
        justifyContent: 'center',
    },
    viewTwo:{
        flex: .7,
        justifyContent: 'space-evenly',
        alignItems: 'center'
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
    text:{
        color:'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 15
    },
    backBtn:{
        flex:.1, 
        justifyContent:'flex-start', 
        alignItems:'center', 
        padding:8, 
        borderRadius:50,
       
    },
    card:{
        flex:1,
        marginHorizontal: 20,
    },
    imgbck: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding:10,
    },
    image:{
        flex:.7,
        resizeMode: "contain",
    },
    
})
