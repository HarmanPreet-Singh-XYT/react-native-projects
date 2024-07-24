import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import TrackPlayer, { useProgress,State, usePlaybackState } from 'react-native-track-player';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface ProgressBarProps {
    currentProgress: number;
    totalProgress: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ currentProgress, totalProgress }) => {
    let curProgress = Math.round(currentProgress * 100 / totalProgress);
    const progressBarRef = useRef<View>(null);
    const handlePress = (event: any) => {
      event.persist(); // Persist the event to access it asynchronously
      progressBarRef.current?.measure((fx, fy, width, height, px, py) => {
        const offsetX = event.nativeEvent.pageX - px;
        const percentage = (offsetX / width) * 100;
        curProgress = Math.round(percentage*100/totalProgress);
        TrackPlayer.seekTo(Math.round(percentage*totalProgress/100));
      });
    };
  
    return (
      <TouchableOpacity onPress={handlePress} style={styles.progressBlock}>
        <View style={[styles.aboveBar, { width: `${curProgress}%` }]} />
        <View style={styles.belowBar} ref={progressBarRef} />
      </TouchableOpacity>
    );
};
const MusicPlayer = ({ route, navigation }:{route:any,navigation:NativeStackNavigationProp<any,any>}) => {
    const progress = useProgress();
    const state = usePlaybackState();
    const {activeTrack,readyToPlay} = route.params;
    
    
    const imgIcons = {
        play:'https://cdn-icons-png.flaticon.com/512/54/54377.png',
        forward:'https://cdn3.iconfinder.com/data/icons/makinterang-music-solid/24/3._Control_fast_forward-512.png',
        backward:'https://static.thenounproject.com/png/1248720-200.png',
        pauseIcon:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png'
    }
    const coverImg = {
        url:'https://edgroom-blogs.s3.ap-south-1.amazonaws.com/202310071805064792540_38983_u23h.jpg'
    };
  return (
    <>
    {readyToPlay ? <View style={styles.container}>
        <Image style={styles.imgCover} source={{uri:activeTrack.artwork}} height={400}/>
        <View style={styles.detailsBlock}>
            <Text style={styles.musicName}>{activeTrack.title}</Text>
            <Text style={styles.musicDetails}>{activeTrack.artist}</Text>
        </View>
        <View style={styles.playbackBlock}>
            <ProgressBar currentProgress={progress.position} totalProgress={progress.duration}/>
            <View style={styles.playbackBlock2}>
                <TouchableOpacity onPress={()=>console.log(activeTrack)}><Image width={75} height={75} source={{uri:imgIcons.backward}}/></TouchableOpacity>
                {(state.state==='playing') ? <TouchableOpacity onPress={()=>TrackPlayer.pause()}><Image width={100} height={100} source={{uri:imgIcons.pauseIcon}}/></TouchableOpacity>
                : <TouchableOpacity onPress={()=>TrackPlayer.play()}><Image width={100} height={100} source={{uri:imgIcons.play}}/></TouchableOpacity>}
                <TouchableOpacity><Image width={75} height={75} source={{uri:imgIcons.forward}}/></TouchableOpacity>
            </View>
        </View>
    </View>
    : <ActivityIndicator style={{margin:'auto'}} size={96}/>}
    </>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap:50,
        backgroundColor: 'white'
    },
    imgCover:{
        marginTop:40,
        borderRadius:20
    },
    detailsBlock:{
        alignItems:'center'
    },
    musicName:{
        color:'black',
        fontSize:42,
        fontWeight:'bold'
    },
    musicDetails:{
        fontSize:18
    },
    playbackBlock:{
        alignItems:'center',
        gap:40
    },
    playbackBlock2:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
    },
    progressBlock:{
        width:'100%',
        position:'relative'
    },
    aboveBar:{
        height:10,
        backgroundColor:'black',
        borderRadius:20,
        position:'absolute',
        zIndex:2,
    },
    belowBar:{
        height:10,
        backgroundColor:'#D9D9D9',
        width:'100%',
        borderRadius:20,
        zIndex:1
    }
})
export default MusicPlayer;