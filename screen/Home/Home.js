import React, {useState} from 'react';
import {FlatList, Pressable, ScrollView, Text, View} from 'react-native';
import Title from '../../components/Title/Title';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import globalStyle from '../../assets/style/main';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  //用户展示
  const data = [
    {
      name: '玉皇大帝',
      id: 1,
    },
    {
      name: '如来佛祖',
      id: 2,
    },
    {
      name: '菩提祖师',
      id: 3,
    },
    {
      name: '太上老君',
      id: 4,
    },
    {
      name: '太乙真人',
      id: 5,
    },
    {
      name: '李靖',
      id: 6,
    },
    {
      name: '嫦娥',
      id: 7,
    },
    {
      name: '沙悟净',
      id: 8,
    },
    {
      name: '观音菩萨',
      id: 9,
    },
  ];
  //帖子
  const posts = [
    {
      name: '孙悟空',
      location: '花果山',
      likes: 3401,
      comments: 366,
      bookmarks: 88,
      id: 1,
    },
    {
      name: '杨戬',
      location: '灌江口',
      likes: 1564,
      comments: 34534,
      bookmarks: 88,
      id: 2,
    },
    {
      name: '哪吒',
      location: '陈塘关',
      likes: 1590,
      comments: 4345,
      bookmarks: 321,
      id: 3,
    },
    {
      name: '猪八戒',
      location: '高老庄',
      likes: 1960,
      comments: 2346,
      bookmarks: 312,
      id: 4,
    },
    {
      name: '天命人',
      location: ' ',
      likes: 9999,
      comments: 3236,
      bookmarks: 1236,
      id: 5,
    },
  ];
  //用户区
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1); //当前的页码
  const [isLoading, setIsLoading] = useState(false); //是否正在加载数据
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize)); //需要渲染的数据

  //帖子区
  const postPageSize = 2;
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [renderedPostData, setRenderedPostData] = useState(
    posts.slice(0, postPageSize),
  );

  const pagination = (data, pageNumber, pageSize, isPost = false) => {
    //返回需要加载的新数据
    let startIndex = (pageNumber - 1) * pageSize; //需要加载的数据的起始坐标

    if (startIndex >= data.length) {
      return [];
    }
    if (isPost) {
      setPostPageNumber(pageNumber);
    }
    setPageNumber(pageNumber); //请求下一页
    return data.slice(startIndex, startIndex + pageSize);
  };
  return (
    <View style={globalStyle.bcakgroundWhite}>
      <ScrollView>
        <View style={style.header}>
          <Title title={'开始探索吧！'} />
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color="#CACDDE" size={20} />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
        <View style={style.UserStoryContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
              scrollEnabled={false}
              keyExtractor={item => item.id.toString()}
              onEndReachedThreshold={0.5} //当用户滚动当前浏览50%的数据
              onEndReached={() => {
                if (!isLoading) {
                  //如果没有‘正在加载’
                  setIsLoading(true); //正在加载
                  setRenderedData(prev => [
                    ...prev,
                    ...pagination(data, pageNumber + 1, pageSize),
                  ]);
                  setIsLoading(false); //加载完成
                }
              }}
              horizontal={true} //水平放置
              showsHorizontalScrollIndicator={false} //隐藏滚动条
              data={renderedData}
              renderItem={({item}) => <UserStory name={item.name} />}
            />
          </ScrollView>
        </View>
        <View style={style.userPostContainer}>
          <FlatList
            scrollEnabled={false}
            keyExtractor={item => item.id.toString()}
            data={renderedPostData}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!isLoadingPost) {
                setIsLoadingPost(true);
                setRenderedPostData(prev => [
                  ...prev,
                  ...pagination(posts, postPageNumber + 1, postPageSize, true),
                ]);
                setIsLoadingPost(false);
              }
            }}
            renderItem={({item}) => (
              <UserPost
                name={item.name}
                location={item.location}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
