/**
 * Created by thram on 19/04/17.
 */
import { pipe } from './fp';
import { isEmpty, filterList } from './tools';


// Data
const addToAlignment = (init = [], item) => init.concat(item);

const filterByStats = filterList(item => !isEmpty(item.stats));

const byAlignment = (data = []) => data.reduce((result, item) => {
  const alignment = item.biography.alignment;
  result[alignment] = addToAlignment(result[alignment], item);
  return result;
}, {});

export const groupByAlignment = pipe(filterByStats, byAlignment);