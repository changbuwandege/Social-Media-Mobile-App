import React from "react";
import {View, Image, Text } from 'react-native'
import { PropTypes  } from "prop-types";
import style from "./style";

const UserStory = (props) =>{
    return (
        <View style={style.storyContainer}>
            <View style={style.userImageContainer}>
                <Image source={require('../../assets/images/Ellipse_146.png')} />
            </View>
            <Text style={style.name}>{props.name}</Text>
        </View>
    );
};

UserStory.propTypes = {
    name: PropTypes.string.isRequired,
};

export default UserStory;