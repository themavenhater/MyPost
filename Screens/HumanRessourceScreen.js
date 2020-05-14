import React, { useState, useEffect } from "react";
import {
  Alert,
  AsyncStorage,
  Image,
  Picker,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView
} from "react-native";
import Card from "../Components/Card";
//const {services} = require("../database/services.json")
const { height } = Dimensions.get("window");

const HumanRessourcesScreen = (props) => {
  // const type = props.navigation.getParam("service",{})
  // const {color, ...service} = services[type]

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.03 }} />
      <View style={styles.goBack}>
        <View style={{ flex: 0.04 }} />
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => props.navigation.goBack()}
        >
          <Image
            source={require("../assets/images/go-back.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 25, color: "black" }}>Human Ressources</Text>
        <View style={{ flex: 0.14 }} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginHorizontal: 10,
          backgroundColor: "#e8e8e8"
        }}
      >
        <ScrollView
          style={{ backgroundColor: "#e8e8e8", height: height - 200 }}
        >
          <Card
            navigation={props.navigation}
            next="ServiceDetail"
            title="Formations disponible"
            icon="ios-create"
          />
          <Card
            navigation={props.navigation}
            next="ServiceDetail"
            title="Appel a condidature"
            icon="ios-information-circle"
          />
          <Card
            navigation={props.navigation}
            next="ServiceDetail"
            title="Notes d'intérim"
            icon="ios-chatboxes"
          />
          <Card
            navigation={props.navigation}
            next="ServiceDetail"
            title="Nominations"
            icon="md-checkmark-circle"
          />
          <Card
            navigation={props.navigation}
            next="ServiceDetail"
            title="Notes de services"
            icon="ios-journal"
          />
          <Card
            navigation={props.navigation}
            next="ServiceDetail"
            title="Conventions"
            icon="ios-folder"
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goBack: {
    flex: 0.07,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 5,
    borderColor: 'rgba(0,90,170,1)'
  },
  backBtn: {
    flex: 0.1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    borderRadius: 50
  },
  image: {
    flex: 0.7,
    resizeMode: "contain"
  },
  viewOne: {
    flex: 0.9,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  miniCard: {
    flexDirection: "row",
    height: 100,
    margin: 10,
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    //borderColor: 'green',
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
export default HumanRessourcesScreen;
