import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {RadioButton} from "react-native-paper";

const App = () => {

  const [likeCoffee, setLikeCoffee] = useState(null);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);

  function showAlert(){
    console.log(name, age, likeCoffee);
    Alert.alert("Summary", `My name is ${name}, I am ${age} years old. I ${likeCoffee ? "like" : "don't like"} coffee.`)
  }


  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "grey" }}>
        
      <View style={styles.row}><Text style={styles.text}>Your Name:</Text></View>
      <View style={styles.row}><TextInput onChangeText={setName} value={name}  style={styles.input}></TextInput></View>

        </View>
      <View style={{ flex: 2, backgroundColor: "#c2c2a3" }}>

      <View style={styles.row}><Text  style={styles.text}>Your Age:</Text></View>
      <View style={styles.row}><TextInput onChangeText={setAge} value={age} keyboardType="numeric" style={styles.input}></TextInput></View>

      </View>
      <View style={{ flex: 3, backgroundColor: "#8585ad" }}>

      <View style={styles.row}><Text style={[styles.text, {alignSelf:"center"}]}>Like Coffee?</Text></View>
        <View style={[styles.row, {flex:1}]}><RadioButton value={likeCoffee} onPress={()=>{setLikeCoffee(true)}} status={ likeCoffee ? "checked" : "unchecked"}></RadioButton><Text style={{fontSize:20}}>Yes</Text>
        <View style={[styles.row, {flex:1}]}><RadioButton value={likeCoffee} onPress={()=>{setLikeCoffee(false)}} status={!likeCoffee ? "checked" : "unchecked"}></RadioButton><Text style={{fontSize:20}}>No</Text></View>
        </View>

      <View style={styles.row}><TouchableOpacity onPress={showAlert} style={styles.button}><Text style={{fontSize:20}}>Submit</Text></TouchableOpacity></View>



        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderWidth: 20,
    borderColor: '#ff00ff',
    borderRadius: 40,
  },

  text:{
    flex:1,
    fontSize:20,
    width: 150,
    textAlign: "center",
    color: "black",
  },

  row:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    margin:15,
  },

  input:{
    flex:2,
    borderWidth:2,
    padding: 5,
  },
  button:{
    backgroundColor: "#df80ff",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#ff00ff',
    flex:1,
    padding:10,
    flexDirection:"column",
    alignItems:"center",
    marginHorizontal: 50,
  }


});

export default App;