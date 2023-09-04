import { AVPlaybackSource } from "expo-av/build/AV.types";
import { Character, CharacterRaw } from '../tools/interfaces';
import { cycle, shuffle } from '../tools/tools';
import { CharacterImage } from './Images'


// @ts-ignore
export const createCharacters = (charactersData: CharacterRaw[], cardSettings: CardsImigesSettings): Character[] => charactersData.map(
    (char) => {
        return {
            name: char.name,
            // Randomize an order of phrases for every new play
            onSuccessSounds: cycle(...shuffle(char.onSuccessSounds)),
            getImageComponent: (key: number, onPress: () => void, hide: boolean) => <CharacterImage source={char.image} key={key} onPress={onPress} hide={hide} cardBack={cardSettings.cardBack}/>
        }
    }
  );


export const createGreetingSound = (greetingSoundList: AVPlaybackSource[]): Generator<AVPlaybackSource> => cycle(...shuffle(greetingSoundList));
