import { StyleSheet } from "react-native";
import { scaleFontSize, verticalScale, horizontalScale } from "../../assets/style/scaling";

const style = StyleSheet.create({
    storyContainer: {
        marginRight: horizontalScale(24),
    },
    name: {
        textAlign: "center",
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: scaleFontSize(14),
        lineHeight: horizontalScale(17),
        marginTop: verticalScale(6),
    },
    userImageContainer: {
        borderWidth: 1,
        borderColor: '#F35BAC',
        padding: horizontalScale(2.5),
        borderRadius: horizontalScale(50),
    },
});

export default style;