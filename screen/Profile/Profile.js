import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyle from '../../assets/style/main';
import style from './style';
import { ProfileTabNavigation } from '../../navigation/MainNavigation';

const Profile = () => {
  return (
    <ScrollView style={[globalStyle.bcakgroundWhite,globalStyle.flex]}>
      <View style={style.profileImageContainer}>
        <View style={style.profileImageContent}>
            <Image 
            source={require('../../assets/images/Profile_avator.png')}
            style={style.profileImage}
            />
        </View>
      </View>
      <View style={style.userNameContainer}>
        <Text style={style.userName}>悟空</Text>
      </View>
      <View style={style.profileStatsContainer}>
        <View style={[style.singleStatContainer,style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>45</Text>
            <Text style={style.singleText}>关注</Text>
        </View>
        <View style={[style.singleStatContainer,style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>30M</Text>
            <Text style={style.singleText}>粉丝</Text>
        </View>
        <View style={[style.singleStatContainer]}>
            <Text style={style.singleStatNumber}>100</Text>
            <Text style={style.singleText}>博客数</Text>
        </View>
      </View>
      <View style={style.border}></View>
      <View style={{height:'100%'}}>
        <ProfileTabNavigation/>
      </View>
    </ScrollView>
  );
};

export default Profile;
