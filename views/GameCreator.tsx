import React, { useRef } from "react";
import {
  Character,
  GameSettings,
  userInputSettings,
} from "../tools/interfaces";
import {
  createCharacters,
  createGreetingSound,
} from "../components/Characters";
import { charactersData } from "../content/characters";
import { cardsSettings } from "../content/common";
import { GameMenu } from "./GameMenu";
import { GameSettingsContext } from "../tools/context";

export const GameLauncher: React.FC<{ gameSettings: userInputSettings }> = (
  props
) => {
  const settings = props.gameSettings;
  const greetingSoundsGenerator = createGreetingSound(
    settings.musicSettings.greetingSoundList
  );

  // To avaoid unintentional re-rendering
  const gameSettings = useRef<GameSettings>({
    ...settings,
    greetingSoundGen: greetingSoundsGenerator,
  });

  const characters: Character[] = createCharacters(
    charactersData,
    cardsSettings,
  );

  return (
    <GameSettingsContext.Provider value={gameSettings.current}>
      <GameMenu characters={characters} />
    </GameSettingsContext.Provider>
  );
};
