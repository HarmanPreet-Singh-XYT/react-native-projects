import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const Home = ({navigation}:{navigation:NativeStackNavigationProp<any,any>}) => {
  return (
    <View style={styles.bar}>
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Rock Paper Scissors')} style={styles.btnContainer}><Text style={styles.btns}>Rock Paper Scissors</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Random Images')} style={styles.btnContainer}><Text style={styles.btns}>Random Images</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Testimonials')} style={styles.btnContainer}><Text style={styles.btns}>Testimonials</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Password Generator')} style={styles.btnContainer}><Text style={styles.btns}>Password Generator</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Music Player')} style={styles.btnContainer}><Text style={styles.btns}>Music Player</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Page Showcase')} style={styles.btnContainer}><Text style={styles.btns}>Page Showcase</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tic Tac Toe')} style={styles.btnContainer}><Text style={styles.btns}>Tic Tac Toe</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Currency Converter')} style={styles.btnContainer}><Text style={styles.btns}>Currency Converter</Text></TouchableOpacity>
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    bar:{
        width:'90%',
        backgroundColor:'white',
        height:'auto',
        borderRadius:20,
        margin:'auto',
        elevation:5,
        padding:20,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    btns:{
        fontSize:26,
        fontWeight:'bold',
        color:'white',
    },
    btnContainer:{
        backgroundColor:'slateblue',
        padding:20,
        borderRadius:20,
        margin:5
    }
})
export default Home