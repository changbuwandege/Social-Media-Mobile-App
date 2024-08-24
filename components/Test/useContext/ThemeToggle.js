import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { ThemeContext } from "./ThemeProvider";

// export const ThemeToggle = ()=>{
//     const { theme, toggleTheme} = useContext(ThemeContext);

//     return(
//         <View>
//             <Text>目前的主题颜色是：{theme}</Text>
//             <Button title={'更换主题'} onPress={toggleTheme}/>
//         </View>
//     );
// };

export const ThemeToggle = ()=>{
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <View>
            <Text>the current theme is:{theme}</Text>
            <Button title={'Change Themes'} onPress={toggleTheme}/>
        </View>
    );
}