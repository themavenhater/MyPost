import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Entypo, SimpleLineIcons } from '@expo/vector-icons';

const ArticleCard = (props) => {

  return (
    <TouchableOpacity style={styles.miniCard} onPress={() => props.navigation.navigate("Article")} >
      <Text style={{ fontSize: 18, color: "black", textAlign: "left" }}>{props.title}</Text>
      <Text style={{ fontSize: 13, color: "black" }}>{props.description} ...</Text>
      <View style={styles.tagViews}>
          {props.tags.map((tag,i) =>
                (tag == 1)? <SimpleLineIcons key={i} name="organization" size={28} color="#aaa700" style={{marginLeft:4}} />:
                (tag == 2)? <FontAwesome key={i} name="group" size={30} color="black" style={{marginLeft:4}}/>:
                (tag == 3)? <FontAwesome key={i} name="newspaper-o" size={30} color="#005AAA" style={{marginLeft:4}}/>:
                (tag == 4)?<Entypo key={i} name="new" size={30} color="#aa1400" style={{marginLeft:4}}/>:
                (tag == 6)?<Entypo key={i} name="circle-with-plus" size={30} color="green" style={{marginLeft:4}}/>:
                (tag == 5)?<Text style={{fontSize:20, fontWeight:'bold'}} >DG</Text>: <></>
            )}
            
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 0.15,
    resizeMode: "contain"
  },
  titleView: {
    flex: 0.8,
    borderRadius: 10,
    justifyContent: "center"
  },
  title: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  tagViews: {
    flexDirection: 'row-reverse',
    height:30,
  },
  miniCard: {
    height: 120,
    margin: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#dedede",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    //shadow styling
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  }
});

export default ArticleCard;
