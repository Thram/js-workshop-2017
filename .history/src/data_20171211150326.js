import { isEmpty, random } from './tools';
import characters from './data.json';


const cleanList = characters.filter(item => !isEmpty(item.stats));

const addToAlignment = (init = [], item) => init.concat(item);

const byAlignment = (data = []) => data.reduce((result, item) => {
  const { alignment } = item.biography;
  return { ...result, [alignment]: addToAlignment(result[alignment], item) };
}, {});

export const getAlignments = () => byAlignment(cleanList);

export const getCharacters = () => ({ ...cleanList });
export const getCharacter = id => cleanList.filter(character => character.id === id)[0];
export const getRandomCharacter = () => cleanList[random(0, cleanList.length - 1)];
