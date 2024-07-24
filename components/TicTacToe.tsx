import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TicTacToe = () => {
  const [turn, setTurn] = useState<number>(1);
  const [playerData, setplayerData] = useState({player1:{sign:1},player2:{sign:2}});
  const [winMessage, setwinMessage] = useState<string|null>(null);
  let gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];
  const [blocks, setBlocks] = useState([
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]);
  function checkWinner(blocks:number[][]) {
    // Check horizontal conditions
    for(let x = 0;x<3;x++){
      if(blocks[x][0]===blocks[x][1] && blocks[x][0]===blocks[x][2] && blocks[x][0]!=0)
        return blocks[x][0];
    };
    // Check vertical conditions
    for(let x = 0;x<3;x++){
      if(blocks[0][x]===blocks[1][x] && blocks[0][x]===blocks[2][x] && blocks[0][x]!=0)
        return blocks[0][x];
    };
    // Check diagonal conditions
    if (blocks[0][0] === blocks[1][1] && blocks[0][0] === blocks[2][2] && blocks[0][0]!=0) {
      return blocks[0][0];
    }
    if (blocks[2][0] === blocks[1][1] && blocks[2][0] === blocks[0][2] && blocks[0][0]!=0) {
      return blocks[2][0];
    }
    // No winner
    return false;
  };
  function checkDraw(blocks:number[][]){
    //  Check
    let totalTrueValues = 0;
    for(let x = 0;x<3;x++){
      if(blocks[x][0]!==0 && blocks[x][1]!==0 && blocks[x][2]!==0)
        totalTrueValues++;
    };
    if(totalTrueValues===3) return true;
    else return false;
  }
  const updateData = (mainIndex:number,subIndex:number)=>{
    gameData = blocks;
    if(turn===1){
      gameData[mainIndex][subIndex] = playerData.player1.sign;
    }else{
      gameData[mainIndex][subIndex] = playerData.player2.sign;
    }
    setTurn(turn===1 ? 2 : 1);
    setBlocks(gameData);
    const winnerCheck = checkWinner(gameData);
    if(winnerCheck!=false){
      const player = playerData.player1.sign===winnerCheck ? playerData.player1.sign : playerData.player2.sign;
      setwinMessage(`Player ${player} has Won the Game!`);
      return;
    }else{
      const drawCheck = checkDraw(gameData);
      if(drawCheck) setwinMessage('Draw!');
    }
    
  };
  const resetData = ()=>{
    gameData = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];
    setBlocks(gameData);
    setTurn(1);
    setwinMessage(null);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={[styles.playerTurnText,(winMessage===null && winMessage!=='Draw!') ? {fontSize:46} : {fontSize:26}]}>{winMessage===null ? `Player ${turn} Turn` : winMessage}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.blocksParent}>
          {blocks[0].map((each,index)=><TouchableOpacity disabled={winMessage!==null} onPress={()=>updateData(0,index)} key={index}>
          {each===0 && <View style={[styles.blocks,{backgroundColor:'#6A5ACD'}]}>
          </View>}
          {each===1 && <View style={[styles.blocks,{backgroundColor:'#CD5A5A'}]}>
            <Text style={styles.blockText}>X</Text>
          </View>}
          {each===2 && <View style={[styles.blocks,{backgroundColor:'#C9BE60'}]}>
            <Text style={styles.blockText}>O</Text>
          </View>}
          </TouchableOpacity>)}
        </View>
        <View style={styles.blocksParent}>
          {blocks[1].map((each,index)=><TouchableOpacity disabled={winMessage!==null} onPress={()=>updateData(1,index)} key={index}>
          {each===0 && <View style={[styles.blocks,{backgroundColor:'#6A5ACD'}]}>
          </View>}
          {each===1 && <View style={[styles.blocks,{backgroundColor:'#CD5A5A'}]}>
            <Text style={styles.blockText}>X</Text>
          </View>}
          {each===2 && <View style={[styles.blocks,{backgroundColor:'#C9BE60'}]}>
            <Text style={styles.blockText}>O</Text>
          </View>}
          </TouchableOpacity>)}
        </View>  
        <View style={styles.blocksParent}>
          {blocks[2].map((each,index)=><TouchableOpacity disabled={winMessage!==null} onPress={()=>updateData(2,index)} key={index}>
          {each===0 && <View style={[styles.blocks,{backgroundColor:'#6A5ACD'}]}>
          </View>}
          {each===1 && <View style={[styles.blocks,{backgroundColor:'#CD5A5A'}]}>
            <Text style={styles.blockText}>X</Text>
          </View>}
          {each===2 && <View style={[styles.blocks,{backgroundColor:'#C9BE60'}]}>
            <Text style={styles.blockText}>O</Text>
          </View>}
          </TouchableOpacity>)}
        </View>
      </View>
      <TouchableOpacity style={styles.resetBtn} onPress={resetData}><Text style={styles.resetText}>Reload Game</Text></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap:50,
    backgroundColor: '#2C2B2B'
  },
  container2:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#6A5ACD',
    width:'100%',
    height:75,
    borderRadius:30,
    marginVertical:20
  },
  playerTurnText:{
    color:'white',
    fontWeight:'bold'
  },
  mainContainer:{
    height:'auto',
    width:'100%',
    backgroundColor:'#D9D9D9',
    borderRadius:20,
    paddingVertical:5
  },
  blocksParent:{
    justifyContent:'space-evenly',
    marginVertical:5,
    flexDirection:'row'
  },
  blocks:{
    height:100,
    width:125,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  },
  blockText:{
    fontSize:75,
    color:'white',
    fontWeight:'bold',
  },
  resetBtn:{
    marginHorizontal:'auto',
    backgroundColor:'#4690FF',
    width:250,
    height:50,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  },
  resetText:{
    color:'white',
    fontWeight:'bold',
    fontSize:26
  }
})
export default TicTacToe