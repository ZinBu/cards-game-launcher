import { AVPlaybackSource } from "expo-av/build/AV.types";
import { ImageRequireSource } from "react-native";

export interface CharacterRaw { name: string; onSuccessSounds: AVPlaybackSource[]; image: ImageRequireSource }

export interface Character {
    name: string,
    onSuccessSounds: Generator<AVPlaybackSource>,
    getImageComponent: (key: number, onPress: Function, hide: boolean) => React.FC<any>,
}

export interface PhrasesAndSymbols {
    restart: string,
    rightChocie: string,
    wrongChocie: string,
}

export interface CardsSettings {
    cardBack: ImageBitmap,
    mainActivityBackground: string,
    cardColor: string,
    buttonColor: string,
}

export interface MusicSettings {
    mainThemeBackgroundMusic: AVPlaybackSource,
    greetingSoundList: AVPlaybackSource[]
}

interface BaseSettings {
    musicSettings: MusicSettings,
    cardsSettings: CardsSettings,
    phrases: PhrasesAndSymbols,
}

export interface GameSettings extends BaseSettings {
    greetingSoundGen: Generator<AVPlaybackSource>
}

export interface userInputSettings extends BaseSettings {
    characters: CharacterRaw[],
}
