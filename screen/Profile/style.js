import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale, scaleFontSize } from "../../assets/style/scaling";

const style = StyleSheet.create({
    profileImageContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: verticalScale(32),
    },
    profileImageContent:{
        borderWidth: 1,
        borderColor: '#0150EC',
        padding: horizontalScale(3),
        borderRadius: horizontalScale(110),
    },
    profileImage:{
        height: horizontalScale(110),
        width: horizontalScale(110),
    },
    userName:{
        fontFamily:'宋体',
        fontWeight: '800',
        fontSize: scaleFontSize(22),
        lineHeight: scaleFontSize(26),
        color: '#022150',
    },
    userNameContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: verticalScale(20),
    },
    profileStatsContainer:{
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        borderWith: 1,
        justifyContent: 'center',
        marginTop: verticalScale(16),
    },
    singleStatContainer: {
        alignItems: 'center',
        paddingHorizontal:horizontalScale(18),
        paddingVertical:verticalScale(10),
    },
    singleStatBorder:{
        borderRightWidth: 1,
        borderColor: '#E9EFF1',
    },
    singleStatNumber: {
        fontFamily: '宋体',
        fontWeight: '800',
        fontsize: scaleFontSize(20),
        lineHeight: scaleFontSize(24),
        color:'#022150',
    },
    singleText: {
        fontFamily: '宋体',
        fontWeight: '400',
        fontsize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        color: '#79869F',
        marginTop: verticalScale(6),
    },
    border: {
        borderWidth: 1,
        borderColor: '#EFF2F6',
        marginVertical: verticalScale(16),
        marginHorizontal: horizontalScale(28),
    },
});

export default style;