import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ToastAndroid, Vibration } from 'react-native'
import React, { useRef, useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Clipboard from '@react-native-clipboard/clipboard';
const lowercaseLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const uppercaseLetters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', 
    '+', '[', ']', '{', '}', '\\', '|', ';', ':', "'", '"', ',', '.', 
    '<', '>', '/', '?', '~', '`'
];
const PasswordGenerator = () => {
    const [checks, setChecks] = useState({lowerCase:false,upperCase:false,numbers:false,symbols:false});
    const [generatedPassword, setgeneratedPassword] = useState('Your Password');
    const passLength = useRef<string>('10');
    function randomCharacter(array:string[][]):string{
        const arrLength = array.length;
        const arrIndex = Math.round(Math.random()*(arrLength-1));
        const selectedArr = array[arrIndex];
        const index = Math.round(Math.random()*(selectedArr.length-1));
        return selectedArr[index];
    }
    function checkOptions(){
        let values = [];
        if(!checks.lowerCase && !checks.upperCase && !checks.numbers && !checks.symbols) {values.push(lowercaseLetters,uppercaseLetters,numbers,symbols);return values};
        if(checks.lowerCase) values.push(lowercaseLetters);
        if(checks.upperCase) values.push(uppercaseLetters);
        if(checks.numbers) values.push(numbers);
        if(checks.symbols) values.push(symbols);
        return values;
    }
    const showRequirementToast = () => {
        ToastAndroid.showWithGravity(
          'Password Needs to be of Length more than 0!',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
    };
    function generatePassword(length:number){
        if(passLength.current!='0'){
            Vibration.vibrate();
            const valuesArr = checkOptions();
            let pass = "";
            for(let x = 0;x<length;x++){
                pass += randomCharacter(valuesArr);
            };
            setgeneratedPassword(pass);
        }else showRequirementToast();
    }
    const showCopyToast = () => {
        ToastAndroid.showWithGravity(
          'Your Generated Password has been Copied!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
    };
    function copyToClipboard(){
        Vibration.vibrate();
        Clipboard.setString(generatedPassword);
        showCopyToast();
    };
    function resetParams(){
        Vibration.vibrate();
        passLength.current = '10';
        setChecks({lowerCase:false,upperCase:false,numbers:false,symbols:false});
        setgeneratedPassword('Your Password');
    };
  return (
    <View style={styles.mainContainer}>
        <View style={styles.container}>
            <Text style={styles.heading}>Password Generator</Text>
        </View>
        <View style={styles.container2}>
            <Text style={styles.passLen}>Password Length</Text>
            <TextInput onChangeText={(text)=>{passLength.current = text}} style={styles.inputField} editable maxLength={2} defaultValue={`${passLength.current}`} inputMode='numeric' />
        </View>
        <View style={styles.container3}>
            <View style={styles.container2}>
                <Text style={styles.semiTitles}>Include LowerCase letters</Text>
                <BouncyCheckbox
                size={35}
                fillColor="green"
                unFillColor="#2C2B2B"
                isChecked={checks.lowerCase}
                text="Custom Checkbox"
                iconStyle={{ borderColor: "green" }}
                innerIconStyle={{ borderWidth: 3 }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(isChecked: boolean) => {setChecks({...checks,lowerCase:isChecked});Vibration.vibrate();}}
                />
            </View>
            <View style={styles.container2}>
                <Text style={styles.semiTitles}>Include UpperCase letters</Text>
                <BouncyCheckbox
                size={35}
                fillColor="yellow"
                unFillColor="#2C2B2B"
                isChecked={checks.upperCase}
                text="Custom Checkbox"
                iconStyle={{ borderColor: "yellow" }}
                innerIconStyle={{ borderWidth: 3 }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(isChecked: boolean) => {setChecks({...checks,upperCase:isChecked});Vibration.vibrate();}}
                />
            </View>
            <View style={styles.container2}>
                <Text style={styles.semiTitles}>Include Numbers</Text>
                <BouncyCheckbox
                size={35}
                fillColor="purple"
                isChecked={checks.numbers}
                unFillColor="#2C2B2B"
                text="Custom Checkbox"
                iconStyle={{ borderColor: "purple" }}
                innerIconStyle={{ borderWidth: 3 }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(isChecked: boolean) => {setChecks({...checks,numbers:isChecked});Vibration.vibrate();}}
                />
            </View>
            <View style={styles.container2}>
                <Text style={styles.semiTitles}>Include Symbols</Text>
                <BouncyCheckbox
                size={35}
                fillColor="red"
                isChecked={checks.symbols}
                unFillColor="#2C2B2B"
                text="Custom Checkbox"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 3 }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(isChecked: boolean) => {setChecks({...checks,symbols:isChecked});Vibration.vibrate();}}
                />
            </View>
        </View>
        <View style={styles.container4}>
            <TouchableOpacity onPress={resetParams} style={styles.resetBtn}><Text style={styles.resetText}>Reset</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>generatePassword(parseInt(passLength.current))} style={styles.genBtn}><Text style={styles.genText}>Generate</Text></TouchableOpacity>
        </View>
        <View style={styles.container5}>
            <View></View>
            <Text style={styles.genPass}>{generatedPassword}</Text>
            <TouchableOpacity onPress={copyToClipboard}><Image source={{uri:'https://static-00.iconduck.com/assets.00/clipboard-emoji-411x512-eujxbmqk.png'}} height={52} width={44} /></TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#2C2B2B',
        height:'100%'
    },
    container:{
        width:'85%',
        marginHorizontal:'auto',
    },
    container2:{
        width:'85%',
        marginHorizontal:'auto',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    heading:{
        fontSize:32,
        fontWeight:'bold',
        color:'#B8B8B8',
        marginVertical:15
    },
    inputField:{
        backgroundColor:'#2C2B2B',
        borderColor:'white',
        borderRadius:20,
        borderWidth:2,
        width:100,
        height:40,
        textAlign:'center',
        fontSize:26,
        fontWeight:'bold',
        color:'white',
        padding:0
    },
    passLen:{
        color:'#AAAAAA',
        fontSize:26,
        marginBottom:30,
    },
    semiTitles:{
        color:'#AAAAAA',
        fontSize:20,
    },
    container3:{
        gap:8
    },
    container4:{
        width:'60%',
        marginHorizontal:'auto',
        flexDirection:'row',
        justifyContent:'center',
        gap:20,
        marginVertical:30
    },
    genText:{
        color:'white',
        fontWeight:'bold',
        fontSize:26
    },
    genBtn:{
        backgroundColor:'#4690FF',
        borderRadius:25,
        paddingHorizontal:25,
        paddingVertical:9,
        alignItems:'center'
    },
    resetBtn:{
        backgroundColor:'#DADADA',
        borderRadius:25,
        paddingHorizontal:50,
        alignItems:'center',
        paddingVertical:9
    },
    resetText:{
        color:'black',
        fontWeight:'bold',
        fontSize:26
    },
    container5:{
        backgroundColor:'#DADADA',
        width:'85%',
        height:'auto',
        marginHorizontal:'auto',
        marginVertical:40,
        borderRadius:30,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    genPass:{
        fontSize:32,
        color:'black',
        fontWeight:'bold',
        paddingVertical:30,
        maxWidth:300
    },
})

export default PasswordGenerator