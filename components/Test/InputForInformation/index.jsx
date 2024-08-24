import React, {useState} from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  Switch,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
const InputForInformation = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 3, borderRadius: 6, padding: 10}}
        placeholder="请输入用户名："
        value={userName}
        onChangeText={value => {
          setUserName(value);
        }}
        autoFocus={true}
        returnKeyType={'next'}
      />
      <TextInput
        style={{borderWidth: 3, borderRadius: 6, padding: 10}}
        placeholder="请输入邮箱："
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
        keyboardType={'email-address'}
        returnKeyType={'next'}
      />
      <TextInput
        style={{borderWidth: 3, borderRadius: 6, padding: 10}}
        placeholder="请输入密码："
        value={password}
        onChangeText={value => {
          setPassword(value);
        }}
        secureTextEntry={true}
        returnKeyType={'done'}
      />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Switch
          value={rememberPassword}
          onValueChange={value => setRememberPassword(value)}></Switch>
        <Text>记住密码</Text>
      </View>

      <TouchableOpacity
        style={[
          {backgroundColor: 'green'},
          (userName.length === 0 || password.length < 8) && {opacity: 0.5},
        ]}
        onPress={() => {
          console.log(userName, email, password, rememberPassword);
        }}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={{textAlign: 'center', padding: 5}}>提交</Text>
          <FontAwesomeIcon icon={faCheck} style={{color: 'white'}} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default InputForInformation;