import React from "react";
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import { GameSettingsContext } from "../tools/context";

type Props = {
    title: string,
    onPress: () => void,
    disabled?: boolean,
    width?: number
};

const Button: React.FC<Props> = ({title, onPress, disabled = false, width = 150}) => {
    const settings = React.useContext(GameSettingsContext);
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{...(!disabled ? { ...styles.buttonContainer, backgroundColor: settings.cardsSettings.buttonColor }: styles.buttonContainerDisabled), width: width ? width : 150}}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 150,
        margin: 5,
        elevation: 8,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonContainerDisabled: {
        width: 150,
        margin: 5,
        elevation: 8,
        backgroundColor: "#5d64606e",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        fontFamily: 'Monospace'
    }
});

export default Button;
