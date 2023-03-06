import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Dimensions, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, TextInput, TouchableHighlight, View, SafeAreaView, Image } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Draggable from 'react-native-draggable';
import flag from './sources/flag.png'
import ambulance from './sources/ambulance.png'
import home from './sources/home.png'
import briefcase from './sources/briefcase.png'

export default function App() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 48.4647,
    longitude:35.0462,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  return (
    <View style={styles.container}>
      <MapView 
          style={styles.map}
         region={mapRegion}>
          
          <Marker coordinate={{latitude:  48.4647, longitude: 35.0462}} title="marker"/>
         </MapView>
         
            <View style={styles.draggableWindow}>
              <View style={styles.placeRow}>
                <View style={[styles.place, {borderBottomWidth: 1}]}>
                  <View style={[styles.circle, {borderColor: "#4ce647"}]}></View>
                  <Text>Place</Text>
                </View>
                <View style={styles.place}>
                  <View style={[styles.circle, {borderColor: "#000000"}]}>
                  </View>
                  <Text>Where to?</Text>
                  </View>
              </View>


              <View style={styles.type}>
                <View style={styles.typeItem}>
                  <Image source={flag}  style={styles.image}/>
                  <Text>For ZSU</Text>
                </View>
                <View style={styles.typeItem}>
                  <Image source={ambulance}  style={styles.image}/>
                  <Text>MedAuto</Text>
                </View>
              </View>

              <View style={styles.buttons}>
                <View style={styles.btn}>
                  <Image source={home}  style={styles.imageBtn}/>
                  <Text>Add Home</Text>
                </View>
                <View style={styles.btn}>
                  <Image source={briefcase}  style={styles.imageBtn}/>
                  <Text>Add Work</Text>
                </View>
              </View>
            </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttons:{
    marginTop: 5,
    width: Dimensions.get('window').width * 0.9,
  },
  btn:{
    width: "100%",
    height: Dimensions.get('window').height * 0.07,
    borderBottomWidth: 1,
    borderColor: "#707070",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start'
  },
  image:{
    width: "20%",
    height: "50%",
    resizeMode: 'stretch',
    marginRight: 5,
    marginLeft: 5
  },
  imageBtn:{
    width: "6%",
    height: "35%",
    resizeMode: 'stretch',
    marginRight: 5,
    marginLeft: 5
  },
  type:{
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-around',
    marginTop: 5
  },
  typeItem:{
    width: "30%",
    height: Dimensions.get('window').height * 0.05,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start'
  },
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.57,
  },
  draggableWindow:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  placeRow:{
      width: Dimensions.get('window').width * 0.9,
      alignItems: 'center',
      justifyContent: "space-between",
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#707070",
  },
  place:{
    width: "100%",
    height: Dimensions.get('window').height * 0.05,
    borderColor: "#707070",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start'
  },
  circle:{
    width: 20,
    height: 20,
    borderRadius: 20/2,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 7
  },
});
