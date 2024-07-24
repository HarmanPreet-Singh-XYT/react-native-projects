import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomBar from './BottomBar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const TestimonialSlider = () => {
  const data = [
    {
      imgLink:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
      description:'I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.',
      author:'Rosetta Q'
    },
    {
      imgLink:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
      description:'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.',
      author:'Cherise G'
    },
    {
      imgLink:'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
      description:'Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.',
      author:'Constantine V'
    }
  ]
  const [currentIndex, setcurrentIndex] = useState(0);
  function updateIndex(){
    if(currentIndex<2){
      setcurrentIndex(currentIndex+1);
    }else{
      setcurrentIndex(0);
    };
  }
  useEffect(() => {
    const interval = setInterval(()=>updateIndex(),2000)
    return () => {
      return clearInterval(interval);
    }
  }, [currentIndex]);
  
  
  return (
    <>
    <View style={styles.container}>
      {data.map((each,index)=>index===currentIndex &&
      <View key={index}>
        <Image style={styles.userImage} src={each.imgLink}/>
        <View style={styles.container2}>
          <Text style={styles.description}>{each.description}</Text>
          <Text style={styles.author}>{each.author}</Text>
        </View>
      </View>)}
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
    margin:'auto',
    width:'95%',
    borderRadius:10,
    height:'32%',
    backgroundColor:'slateblue',
    position:'relative',
    elevation:15,
  },
  userImage:{
    borderRadius:100,
    width:100,
    height:100,
    position:'absolute',
    left:'35%',
    right:'50%',
    margin:'auto',
    top:'-20%',
  },
  container2:{
    width:'95%',
    margin:'auto',
    gap:25,
    marginTop:100,
  },
  description:{
    fontSize:26,
    color:'white',
    fontFamily:'cursive',
    fontWeight:'900',
  },
  author:{
    fontSize:16,
    color:'white'
  }
})
export default TestimonialSlider