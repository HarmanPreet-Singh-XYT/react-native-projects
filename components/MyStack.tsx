import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RockPaperScissors from './RockPaperScissors';
import TestimonialSlider from './TestimonialSlider';
import RandomImages from './RandomImages';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="RockPaperScissors"
          component={RockPaperScissors}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Testimonial" component={TestimonialSlider} />
        <Stack.Screen name="RandomImages" component={RandomImages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;