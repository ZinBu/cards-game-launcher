import React from "react";
import {StyleSheet, View, Text} from "react-native";
import ConfettiCannon from 'react-native-confetti-cannon';
import { wonScreenShowingTime } from "../tools/constants";
import { GameSettingsContext } from "../tools/context";

export const MainView: React.FC<React.ComponentProps<any>> = props => {
    const settings = React.useContext(GameSettingsContext);

    return (
        <View style={ {...styles.container, backgroundColor: settings.cardsSettings.mainActivityBackground} }>
            {props.children}
        </View>
        )
};

export const InfoBlock: React.FC<React.ComponentProps<any>> = props => (
    <View style={styles.info}>
        <Text style={styles.text}>{props.labelText}</Text>
    </View>
);

export const ClockBlock: React.FC<React.ComponentProps<any>> = props => (
    <View style={styles.clock}>
        <Text style={styles.text}>{props.clockCounter}</Text>
    </View>
);

export const Playground: React.FC<React.ComponentProps<any>> = props => (
    <View style={styles.playground}>
        {props.children}
    </View>
);

export const Footer: React.FC<React.ComponentProps<any>> = props => (
    <View style={styles.footer}>
        {props.children}
    </View>
);

const Confetti: React.FC<React.ComponentProps<any>> = () =>  {
    const [showConfetti, setShowConfetti] = React.useState(true);

    React.useEffect(
        () => {
            setTimeout(() => setShowConfetti(false), wonScreenShowingTime)
        },
        [true]
    );
    
    return showConfetti ? <ConfettiCannon count={85} origin={{x: -10, y: 0}} fadeOut /> : null;
};

export const WonScreen: React.FC<{show: boolean}> = ({show}) =>  show ? <Confetti /> : null;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxHeight: '100%',
        fontFamily: 'Monospace',
        allignItems: 'center',
        alignContent: 'center',
        flex: 1,
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    info: {
        maxHeight: '20%',
        flex: 1,
        alignContent: 'flex-end',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    clock: {
        maxHeight: 15,
        flex: 1,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    playground: {
        maxWidth: '100%',
        maxHeight: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    footer: {
        padding: 15,
        maxWidth: '100%',
        maxHeight: '10%',
        fontFamily: 'Monospace',
        backgroundColor: 'rgb(34,41,45)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexWrap: 'nowrap',
        flexDirection: 'row'
    },
    text: {
//        marginTop: 20,
        color: 'white',
        fontSize: 18,
        fontFamily: 'Monospace',
    }
});
