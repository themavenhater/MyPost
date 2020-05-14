import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const Card = (props) => {
  return (
    <TouchableOpacity
      style={styles.miniCard}
      onPress={() => props.navigation.navigate(props.next)}
    >
      <Ionicons name= {props.icon} size={50} color="white" />
      <View style={styles.titleView}>
        <Text style={styles.title}>{props.title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};
//default props
Card.defaultProps = {
  icon: "md-checkmark-circle"
} 

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
  miniCard: {
    flexDirection: "row",
    height: 100,
    margin: 10,
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#005AAA',
    justifyContent: "space-evenly",
    alignItems: "center",
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

export default Card;
