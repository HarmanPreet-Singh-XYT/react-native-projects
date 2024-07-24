import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, Vibration, ToastAndroid } from 'react-native'
import React, { useRef, useState } from 'react'

const CurrencyConverter = () => {
    const inputValue = useRef('0');
    const selectedCurrencySymbol = useRef<string>('$');
    const [selectedBlock, setSelectedBlock] = useState<string>('US Dollar');
    const [outputValue, setoutputValue] = useState(0);
    const currencies = [
        {
          name: "US Dollar",
          sign: "$",
          conversionValue: 74.58, // Example conversion value from INR to USD
          country: "US",
          flagLink:'https://images.emojiterra.com/twitter/v13.1/512px/1f1fa-1f1f8.png'
        },
        {
          name: "Euro",
          sign: "€",
          conversionValue: 88.69, // Example conversion value from INR to EUR
          country: "Europe",
          flagLink:"https://images.emojiterra.com/twitter/512px/1f1ea-1f1fa.png"
        },
        {
          name: "British Pound",
          sign: "£",
          conversionValue: 102.34, // Example conversion value from INR to GBP
          country: "UK",
          flagLink:'https://flagpedia.net/data/flags/emoji/twitter/256x256/gb.png'
        },
        {
          name: "Russian Ruble",
          sign: "₽",
          conversionValue: 1.01, // Example conversion value from INR to RUB
          country: "Russia",
          flagLink:'https://images.emojiterra.com/twitter/512px/1f1f7-1f1fa.png'
        },
        {
          name: "French Franc",
          sign: "₣",
          conversionValue: 13.52, // Historical value (not in use currently, Euro is used)
          country: "France",
          flagLink:'https://images.emojiterra.com/twitter/v13.1/512px/1f1eb-1f1f7.png'
        },
        {
          name: "Canadian Dollar",
          sign: "C$",
          conversionValue: 59.32, // Example conversion value from INR to CAD
          country: "Canada",
          flagLink:'https://images.emojiterra.com/twitter/512px/1f1e8-1f1e6.png'
        },
        {
          name: "Japanese Yen",
          sign: "¥",
          conversionValue: 0.68, // Example conversion value from INR to JPY
          country: "Japan",
          flagLink:'https://images.emojiterra.com/twitter/v13.1/512px/1f1ef-1f1f5.png'
        },
        {
          name: "UAE Dirham",
          sign: "د.إ",
          conversionValue: 20.29, // Example conversion value from INR to AED
          country: "Dubai",
          flagLink:'https://images.emojiterra.com/twitter/v14.0/1024px/1f1e6-1f1ea.png'
        },
        {
          name: "Bitcoin",
          sign: "₿",
          conversionValue: 2272784.78, // Example conversion value from INR to BTC (fluctuates)
          country: "Bitcoin",
          flagLink:'https://icons.iconarchive.com/icons/froyoshark/enkel/512/Bitcoin-icon.png'
        }
    ];
      
    function calcCurrencyRupeeToX(){
        if(inputValue.current===''){inputError();return};
        const rupeeValue = parseFloat(inputValue.current);
        currencies.forEach((val)=>{if(val.name===selectedBlock){setoutputValue(rupeeValue/val.conversionValue);selectedCurrencySymbol.current=val.sign}});
    };
    const showErrorToast = () => {
        ToastAndroid.showWithGravity(
          'Enter Valid Value!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
    };
    function inputError(){
        inputValue.current = '0';
        Vibration.vibrate();
        showErrorToast();
    }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.rupeeText}>₹</Text>
        <TextInput onChangeText={(text)=>{inputValue.current = text}} style={styles.inputField} editable maxLength={100} defaultValue={`${inputValue.current}`} inputMode='decimal' />
      </View>
      <View>
        <FlatList 
        data={currencies}
        numColumns={3}
        columnWrapperStyle={styles.flatStyle}
        renderItem={({item})=>(
            <TouchableOpacity style={item.name===selectedBlock ? styles.selectedBlock : styles.blocks} onPress={()=>setSelectedBlock(item.name)}>
                <Image style={styles.blockImage} source={{uri:item.flagLink}} width={50} height={50} />
                <Text style={item.name===selectedBlock ? styles.selectedBlockText : styles.blockText}>{item.country}</Text>
            </TouchableOpacity>)}
        keyExtractor={item=>item.name}
        />
      </View>
      <TouchableOpacity onPress={calcCurrencyRupeeToX} style={styles.genBtn}><Text style={styles.genText}>Convert</Text></TouchableOpacity>
      <View style={styles.outputBlock}>
        <Text style={styles.outputSymbol}>{selectedCurrencySymbol.current}</Text>
        <Text style={styles.outputText}>{outputValue.toFixed(2)}</Text>
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
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        justifyContent:'center',
        marginVertical:50
    },
    inputField:{
        backgroundColor:'#2C2B2B',
        borderColor:'white',
        borderRadius:20,
        borderWidth:2,
        width:150,
        height:40,
        textAlign:'center',
        fontSize:26,
        fontWeight:'bold',
        color:'white',
        padding:0
    },
    rupeeText:{
        fontSize:36,
        color:'white',
        fontWeight:'bold'
    },
    blocks:{
        width:'30%',
        height:100,
        backgroundColor:'#D9D9D9',
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        borderRadius:20
    },
    blockText:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    },
    blockImage:{
        borderRadius:10
    },
    flatStyle:{
        justifyContent:'center',
    },
    selectedBlock:{
        width:'30%',
        height:100,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        borderRadius:20,
        backgroundColor:'#4690FF'
    },
    selectedBlockText:{
        fontSize:22,
        color:'white',
        fontWeight:'bold'
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
        alignItems:'center',
        width:'40%',
        marginHorizontal:'auto',
        marginVertical:30
    },
    outputBlock:{
        backgroundColor:'#4690FF',
        width:'80%',
        height:75,
        borderRadius:20,
        marginHorizontal:'auto',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },
    outputText:{
        fontSize:46,
        fontWeight:'semibold',
        color:'white'
    },
    outputSymbol:{
        fontSize:50,
        color:'white',
        fontWeight:'bold'
    }
})
export default CurrencyConverter