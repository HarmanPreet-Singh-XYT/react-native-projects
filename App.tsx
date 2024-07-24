import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import PageShowcase from './components/PageShowcase'
import PasswordGenerator from './components/PasswordGenerator'
import CurrencyConverter from './components/CurrencyConverter'
import TicTacToe from './components/TicTacToe'
import TestimonialSlider from './components/TestimonialSlider';
import RockPaperScissors from './components/RockPaperScissors';
import RandomImages from './components/RandomImages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MusicPlayerIntialize from './components/MusicPlayerIntialize';

import Home from './components/Home';
import MusicPlayer from './components/MusicPlayer';
const Stack = createNativeStackNavigator();
const App = () => {
  const [activeTrack, setactiveTrack] = useState<any>({artwork:'https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg_4x.jpg',title:'Error Loading Music',artist:'Error Loading Music'});
  const [readyToPlay, setreadyToPlay] = useState(false);
  return (
    <>
    <MusicPlayerIntialize setactiveTrack={setactiveTrack} setreadyToPlay={setreadyToPlay}/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Testimonials" component={TestimonialSlider} />
        <Stack.Screen name="Rock Paper Scissors" component={RockPaperScissors} />
        <Stack.Screen name="Random Images" component={RandomImages} />
        <Stack.Screen name="Password Generator" component={PasswordGenerator} />
        <Stack.Screen name="Currency Converter" component={CurrencyConverter} />
        <Stack.Screen name="Music Player" component={MusicPlayer} initialParams={{activeTrack,readyToPlay}}/>
        <Stack.Screen name="Page Showcase" component={PageShowcase} />
        <Stack.Screen name="Tic Tac Toe" component={TicTacToe} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App