import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale, scaleFontSize } from "../../assets/style/scaling";

const style = StyleSheet.create({
    header:{//头部
        paddingTop:verticalScale(30),
        paddingLeft:horizontalScale(26),
        paddingRight:horizontalScale(17),
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    messageIcon:{//消息图标
        backgroundColor:'#F9FAFB',
        padding: horizontalScale(12),
        borderRadius: horizontalScale(100),
    },
    messageNumberContainer:{//消息容器
        backgroundColor:'#F35BAC',
        width:horizontalScale(11),
        height:verticalScale(10),
        borderRadius:horizontalScale(11),
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        position:'absolute',
        right:horizontalScale(7),
        top:verticalScale(8),
    },
    messageNumber:{//消息数
        fontSize:scaleFontSize(7),
        fontFamily:'heiti',
        lineHeight:scaleFontSize(7),
        fontWeight:'600',
        color:'#FFFFFF'
    },
    UserStoryContainer:{
        paddingHorizontal: horizontalScale(26),
        marginTop : verticalScale(12),
        height: 100,
    },
    userPostContainer:{
        marginTop:verticalScale(30),
        height:'100%',
        paddingHorizontal: horizontalScale(24),
    },
})

export default style;