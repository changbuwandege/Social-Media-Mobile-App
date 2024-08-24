import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import style from './assets/style/main';
const App = () => {
  return (
    <ScrollView>
      <View style={style.header}>
        <Title title={"Let's Explore"}></Title>
        <Pressable style={style.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color="#CACDDE" size={20} />
          <View style={style.messageNumberContainer}>
            <Text style={style.messageNumber}>2</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default App;
