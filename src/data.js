import { pipe } from './fp';
import { isEmpty } from './tools';
import characters from './data.json';

const addToAlignment = (init = [], item) => init.concat(item);

const filterByStats = (data = []) => data.filter(item => !isEmpty(item.stats));

const byAlignment = (data = []) => data.reduce((result, item) => {
  const alignment = item.biography.alignment;
  const update = {};
  update[alignment] = addToAlignment(result[alignment], item);
  return { ...result, ...update };
}, {});

export const getAlignments = () => pipe(filterByStats, byAlignment)(characters);

export const getData = () => ({ ...characters });
