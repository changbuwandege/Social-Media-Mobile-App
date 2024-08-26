import { StyleSheet } from "react-native";
import { scaleFontSize, horizontalScale, verticalScale } from "../../assets/style/scaling";

const style = StyleSheet.create({
    name:{
        fontFamily:'Robot-Bold',
        fontWeight: '800',
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        color: 'black',
    },
    location:{
        fontFamily:'Robot',
        fontWeight: '400',
        fontSize: scaleFontSize(11),
        lineHeight: scaleFontSize(15),
        color: '#79869F',
        marginTop: verticalScale(4),
    },
    userInformation:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    userPostInformation:{
        marginLeft: horizontalScale(10),
    },
    avatar:{
        borderWidth: 1,
        borderColor: '#F35BAC',
        borderRadius: horizontalScale(50),
        padding: horizontalScale(3),
    },
    userInformationContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',

    },
    post:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: verticalScale(8),
    },
    userPostStats:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: verticalScale(10),
        paddingHorizontal: horizontalScale(10),
    },
    userPostStatsButton:{
        marginRight: horizontalScale(10),
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userPostStatIcon:{
       marginLeft: horizontalScale(10),
       marginRight: horizontalScale(3),
    },
    userPostContainer:{
        borderBottomWidth: 1,
        borderBottomColor: '#EFF2F6',
        marginBottom: verticalScale(15),
    },
});

export default style;