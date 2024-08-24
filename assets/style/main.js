import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header:{
        paddingTop:30,
        paddingLeft:26,
        paddingRight:17,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    messageIcon:{
        backgroundColor:'#F9FAFB',
        padding: 12,
        borderRadius: 100,
    },
    messageNumberContainer:{
        backgroundColor:'#F35BAC',
        width:10,
        height:10,
        borderRadius:10,
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        position:'absolute',
        right:7,
        top:10,
    },
    messageNumber:{
        fontSize:6,
        fontFamily:'heiti',
        lineHeight:7,
        fontWeight:'600',
        color:'#FFFFFF'
    },
});

export default style;