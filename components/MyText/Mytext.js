import React from 'react';
import { Text} from 'react-native';
import style from './style';
const MyText = () => {
    const handelTextClick=()=>{
        alert('This text has been clicked');
    }
  return (
    <Text style={([style.text, style.text1], {color: 'blue'})} onPress={()=>handelTextClick()}>
      Hello,React Native world!
    </Text>
  );
};

export default MyText;
