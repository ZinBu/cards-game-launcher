# Cards game launcher

A react-native component which is ready to create a card game easily.

### How to install

Add `@zinbu:registry=https://npm.pkg.github.com` to your `.npmrc`

### How to use

You have to create some input data specified by interface `userInputSettings`.

<details>
  <summary>Interfaces description</summary>

```js
import { AVPlaybackSource } from "expo-av/build/AV.types";
import { ImageRequireSource } from "react-native";

export interface CharacterRaw { name: string; onSuccessSounds: AVPlaybackSource[]; image: ImageRequireSource }


export interface PhrasesAndSymbols {
    restart: string,
    rightChocie: string,
    wrongChocie: string,
}

export interface CardsSettings {
    cardBack: ImageRequireSource,
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

export interface userInputSettings extends BaseSettings {
    characters: CharacterRaw[],
}
```

</details>

<details>
    <summary>Data example</summary>

```js
export const phrasesAndSymbols: PhrasesAndSymbols = {
    restart: 'Once more?',
    rightChocie: 'Great!',
    wrongChocie: 'Ooh no!',
};


export const musicSettings: MusicSettings ={
    mainThemeBackgroundMusic: require('./assets/sounds/main.mp3'),
    greetingSoundList: [require('./assets/sounds/1.mp3'), require('./assets/sounds/2.mp3')]
};

export const cardsSettings: CardsSettings = {
    cardBack: require('./assets/images/some.png'),
    mainActivityBackground: 'rgb(8, 8, 8)',
    cardColor: 'rgb(50, 50, 50)',
    buttonColor: 'rgb(60, 60, 60)',
};


export const charactersData: CharacterRaw[] = [
{
    name: 'Mr. cat',
    image: require('./assets/images/cat.png'),
    onSuccessSounds: [
        require('./assets/sounds/cat_1.mp3'),
        require('./assets/sounds/cat_2.mp3')
    ],
},
{
    name: 'Mr. dog',
    image: require('./assets/images/dog.png'),
    onSuccessSounds: [
        require('./assets/sounds/dog_1.mp3'),
        require('./assets/sounds/dog_2.mp3')
    ],
}
];
```

</details>

```js
import {GameLauncher, userInputSettings} from '@zinbu/cards-game-launcher';

export const App = () => {
    const gameSettings: userInputSettings = {
        characters: charactersData,
        musicSettings: musicSettings,
        cardsSettings: cardsSettings,
        phrases: phrasesAndSymbols
    };
    return <GameLauncher gameSettings={gameSettings} />;
};

export default App;
```

### Project examples

[Bimer](https://cards-bimer.vercel.app/)

### Known problems

- types declaration
