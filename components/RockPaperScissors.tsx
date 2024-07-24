import { View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const RockPaperScissors = () => {
    const emoji = [
        {
            emoji:'👊',
            bgColor:'#ff0000'
        },
        {
            emoji:'🖐️',
            bgColor:'#2196f3'
        },
        {
            emoji:'✌️',
            bgColor:'#4caf50'
        },
    ]
    const [scores, setScores] = useState({user:0,computer:0});
    const [message, setMessage] = useState<null|string>(null);
    const indexes = ['Rock','Scissors','Paper'];
    function setupScores(outcome:string,userInput:number,computerInput:number){
        if(outcome==='win'){
            setScores({user:scores.user+1,computer:scores.computer-1});
            setMessage(`You Win! ${indexes[userInput]} beats ${indexes[computerInput]}`);
        }else{
            setScores({user:scores.user-1,computer:scores.computer+1});
            setMessage(`You Lost! ${indexes[computerInput]} beats ${indexes[userInput]}`)
        }
    }
    function computerOutput(){
        return Math.round(Math.random()*2);
    }
    function calculateResult(userInput:number){
        const computerInput = computerOutput();
        if(userInput===computerInput)
            setMessage("It's a Tie!");
        else if(userInput===2 && computerInput===0)
            setupScores('win',userInput,computerInput);
        else if(userInput===0 && computerInput===1)
            setupScores('win',userInput,computerInput);
        else if(userInput===1 && computerInput===2)
            setupScores('win',userInput,computerInput);
        else
            setupScores('lost',userInput,computerInput);
    }
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.title}>Rock Paper Scissors Game</Text>
            <View>
                <Text style={styles.title2}>Choose your move</Text>
                <View style={styles.container2}>
                    {emoji.map((each,index)=><TouchableOpacity key={index} style={{elevation:10,borderRadius:20,justifyContent:'center',alignItems:'center'}} onPress={()=>calculateResult(index)}><Text style={{borderRadius:20,textAlign:'center',backgroundColor:each.bgColor,color:'yellow',width:125,height:125,margin:'auto',fontSize:69,textAlignVertical:'center'}}>{each.emoji}</Text></TouchableOpacity>)}
                </View>
                {message && <Text style={styles.title3}>{message}</Text>}
            </View>
            <Text style={styles.title4}>Your score: <Text style={{color:'#2196f3'}}>{scores.user}</Text> Computer score: <Text style={{color:'#4caf50'}}>{scores.computer}</Text></Text>
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        margin:'auto',
        width:'98%',
    },
    title:{
        textAlign:'center',
        fontSize:34,
        fontWeight:'bold',
        color:'black',
    },
    title2:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        marginTop:25
    },
    container2:{
        flex:-1,
        flexDirection:'row',
        marginVertical:50,
        margin:'auto',
        gap:15
    },
    title3:{
        textAlign:'center',
        fontSize:26,
        fontWeight:'bold',
        color:'black'
    },
    title4:{
        textAlign:'center',
        fontSize:26,
        fontWeight:'bold',
        color:'black',
        marginTop:25
    }
})
export default RockPaperScissors