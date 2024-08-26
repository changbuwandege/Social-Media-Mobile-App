import { StyleSheet } from "react-native";
import { scaleFontSize } from "../../assets/style/scaling";

const style = StyleSheet.create({
    title:{
        fontFamily: '宋体',
        fontWeight: '900',
        fontSize: scaleFontSize(24),
        lineHeight: scaleFontSize(29),
        color: 'black',
    },
});

export default style;