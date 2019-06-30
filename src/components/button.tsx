import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle, StyleProp } from 'react-native';

interface Props{
    title?:string
    style?:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>,
    onPress():void
}
const Button= (props:Props) => {
    const { title = '', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};
export default Button;
const styles = StyleSheet.create({
    button: {
        flex:1,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
       
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },

    text: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});
