/**
 * Created by thram on 19/04/17.
 */
import { pipe } from './fp';
import { isEmpty, filterList } from './tools';

export const COLORS = {
  red: '#E42E45',
  yellow: '#F8D507',
  blue: '#32576A',
};

const addToAlignment = (init = [], item) => init.concat(item);

const filterByStats = filterList(item => !isEmpty(item.stats));

const byAlignment = (data = []) => data.reduce((result, item) => {
  const alignment = item.biography.alignment;
  result[alignment] = addToAlignment(result[alignment], item);
  return result;
}, {});

export const groupByAlignment = pipe(filterByStats, byAlignment);

export default { groupByAlignment };
