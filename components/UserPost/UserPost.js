import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const UserPost = props => {
  const {name, location, likes, comments, bookmarks} = props;
  return (
    <View style={style.userPostContainer}>
      <View style={style.userInformationContainer}>
        <View style={style.userInformation}>
          <View style={style.avatar}>
            <Image source={require('../../assets/images/avatar.png')} />
          </View>
          <View style={style.userPostInformation}>
            <Text style={style.name}>{name}</Text>
            {location && <Text style={style.location}>{location}</Text>}
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsis} color={'#79869F'} size={22} />
        </Pressable>
      </View>
      <View style={style.post}>
        <Image source={require('../../assets/images/lifes.png')} />
      </View>
      <View style={style.userPostStats}>
        <Pressable style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faHeart} style={style.userPostStatIcon} />
          <Text>{likes}</Text>
        </Pressable>
        <Pressable style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faComment} style={style.userPostStatIcon} />
          <Text>{comments}</Text>
        </Pressable>
        <Pressable style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faBookmark} style={style.userPostStatIcon} />
          <Text>{bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};
export default UserPost;
