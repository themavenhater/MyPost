import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
// import setAuthToken from "../utils/setAuthToken";
// import axios from "axios";
// import BACKEND_URL from "../consts";
const { height } = Dimensions.get("window");

export default class ArticleScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.05 }} />
        <View style={styles.goBack}>
          <View style={{ flex: 0.05 }} />
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => this.props.navigation.goBack()}
          >
            <Image
              source={require("../assets/images/news.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", marginHorizontal: 10 }}
        >
          <ScrollView style={{ height: height - 200 }}>
            <Image
              source={require("../assets/article.jpg")}
              style={styles.image}
            />
            <View style={styles.innerImage}>
              <Text style={styles.title}>Nouveau service CARDLESS</Text>
              <Text style={styles.speakerText}>Le 09/02/2020</Text>
            </View>
            <Text style={styles.description}>
              Algérie Poste informe son aimable clientèle que Le retrait sans
              carte sur le GAB est désormais possible.
            </Text>
            <Text style={styles.description}>
              En effet Algérie Poste lance son nouveau service CARDLESS qui
              permet à ses clients, détenteurs de la carte monétique EDAHABIA,
              d’effectuer des retraits d’argent dans tous les guichets
              automatiques de billets à travers le territoire national, sans
              l’utilisation de la carte monétique.
            </Text>
            <Text style={styles.description}>
              Pour bénéficier du service Cardless, le client doit adhérer
              d’abord à l'application mobile BARIDIMOB, et suivre les étapes
              suivantes :
            </Text>
            <Text style={styles.list}>
              • Ouvrir l’application mobile BARIDIMOB
            </Text>
            <Text style={styles.list}>
              • Choisir l’opération de transaction sans carte monétique CARDLESS
            </Text>
            <Text style={styles.list}>• Choisir nouvelle transaction+</Text>
            <Text style={styles.list}>• Choisir l’option retrait sur GAB</Text>
            <Text style={styles.list}>• Saisir le montant de retrait</Text>
            <Text style={styles.list}>
              • Préciser la date d’expiration de cette transaction
            </Text>
            <Text style={styles.list}>- Exemple : 04 décembre 2019, 17h57</Text>
            <Text style={styles.list}>
              • Cliquer sur Générer et puis cliquer c’est fait.
            </Text>
            <Text style={styles.description}>
              Une page détaillée apparait, affichant le choix du client , ainsi
              que les informations suivantes : le numéro de l’opération, le
              montant de retrait choisi et la date d’expiration du service
              CARDLESS.
            </Text>
            <Text style={styles.description}>
              Une fois que les étapes précédentes sont achevées , un message
              sera affiché pour confirmer l’ opération comme suit : «
              transaction sans carte généré avec succès ».
            </Text>
            <Text style={styles.description}>
              Un SMS sera donc envoyé au client, en temps réel, contenant le
              code PIN de l’opération, muni de ce code secret, le client se
              rapproche du guichet automatique de son choix, il choisit le
              bouton « retrait sans carte » et entre le numero de l’opération de
              retrait reçu sur l’application BARIDIMOB, puis il saisit le code
              PIN (code secret) reçu par SMS, il confirme l’opération et
              récupère le montant de retrait qu’il a commandé et programmé.
            </Text>
            <Text style={styles.description}>
              Encore une fois, Algérie Poste réitère son engagement de ne
              lésiner le moindre effort afin de moderniser et numériser ses
              services pour répondre aux attentes et exigences de sa clientèle
              dont sa satisfaction constitue une priorité majeure.
            </Text>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: "80%",
                alignSelf: "center",
                marginVertical: 10
              }}
            />
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ServiceDetail")}
                style={{alignSelf:"flex-end", marginRight: 15,}}
              >
                <View style={styles.button}>
                  <Text style={styles.confirm}>+ détails</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goBack: {
    flex: 0.07,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 5,
    borderColor: 'rgba(0,90,170,1)'
  },
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  innerImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    margin: 10
  },
  speakerText: {
    fontStyle: "italic",
    color: "#000",
    marginTop: 5,
    fontSize: 16
  },
  description: {
    margin: 15,
    marginTop: 7,
    textAlign: "justify"
  },
  backBtn: {
    flex: 0.1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    borderRadius: 50
  },
  icon: {
    flex: 1,
    resizeMode: "contain"
  },
  list: {
    marginHorizontal: 15,
    marginBottom: 2,
    textAlign: "left"
  },
  confirm: {
    textAlign: "center",
    color: "white",
    fontSize: 20
  },
  button: {
    //width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 40,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "#025ba3"
  }
});
