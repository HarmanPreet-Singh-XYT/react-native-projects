import React, { useEffect,useState } from 'react'
import TrackPlayer from 'react-native-track-player';
import { getActiveTrack, getActiveTrackIndex, updateOptions } from 'react-native-track-player/lib/src/trackPlayer';
const track2 = {
  url: require('../music/random.mp3'), // Load media from the app bundle
  title: 'Raataan Lambiyan',
  artist: 'Tanishk Bagchi, Asees Kaur - Shershaah',
  artwork: 'https://edgroom-blogs.s3.ap-south-1.amazonaws.com/202310071805064792540_38983_u23h.jpg', // Load artwork from the app bundle
  duration: 155
};
async function setupMusic(){
  await TrackPlayer.add([track2]);
}
const MusicPlayerIntialize = ({setactiveTrack,setreadyToPlay}:{setactiveTrack:React.Dispatch<React.SetStateAction<any>>,setreadyToPlay:React.Dispatch<React.SetStateAction<boolean>>}) => {
  async function initializePlayer(){
    await TrackPlayer.setupPlayer();
    await setupMusic();
    const track = await getActiveTrack();
    setactiveTrack(track);
    setreadyToPlay(true);
}

  useEffect(() => {
    TrackPlayer.registerPlaybackService(() => require('./service'));
    initializePlayer();
  }, []);
  return (
    <></>
  )
}

export default MusicPlayerIntialize