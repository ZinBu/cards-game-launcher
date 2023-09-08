# Cards game launcher

A react-native component which is ready to create a card game easily.

### How to install

Add `@zinbu:registry=https://npm.pkg.github.com` to your `.npmrc`

### How to use

TODO!!

```javascript
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

...
