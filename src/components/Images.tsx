import React from 'react';
import {Animated, Easing, ImageRequireSource, StyleSheet, TouchableHighlight} from 'react-native';
import {animationSpeed, fadeInSpeed} from '../tools/constants';
import { GameSettingsContext } from "../tools/context";


export const CharacterImage: React.FC<{ source: ImageRequireSource, onPress: () => void, hide: boolean, cardBack: ImageRequireSource}> = ({source, onPress, hide, cardBack}) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    const scaleX = React.useRef(new Animated.Value(0)).current;
    const settings = React.useContext(GameSettingsContext);

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: fadeInSpeed,
            useNativeDriver: true,
        }).start();
    };

    const scaleIn = () => {
        Animated.timing(
            scaleX,
            {
                toValue: 1,
                duration: animationSpeed,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start();
        return scaleX.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
    };

    const scaleOut = () => {
        Animated.timing(
            scaleX,
            {
                toValue: 0,
                duration: animationSpeed,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start();
        return scaleX.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        })
    };


    React.useEffect(() => {
        fadeIn();
    }, [true])

    const imageBaseStyle = {...styles.char, opacity: fadeAnim, backgroundColor: settings.cardsSettings.cardColor};

    return <TouchableHighlight
        onPress={onPress}
        >
            {
                !hide
                // TODO Shaking on fail
                // TODO Blow of rotating bimers
                ? <Animated.Image style={{...imageBaseStyle, transform: [{scaleX: scaleIn()}] }} source={source} />
                : <Animated.Image style={{...imageBaseStyle, transform: [{scaleX: scaleOut()}] }} source={cardBack} />}
        </TouchableHighlight>;
};

const styles = StyleSheet.create({
    char: {
        margin: 10,
        width: 100,
        height: 100,
        borderRadius: 12,
        borderColor: 'white',
        borderStyle: 'solid',
        border: 3,
    }
});
