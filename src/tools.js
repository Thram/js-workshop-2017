/**
 * Created by thram on 20/04/17.
 */
// Tools
export const random = (min = 0, max = 99) => Math.round(((max - min) * Math.random()) + min);
export const times = (number, callback) => {
  for (let i = 0; i < number; i += 1) {
    callback(i);
  }
};
export const isEmpty = (obj = {}) => !Object.keys(obj).length;
export const forEach = (obj, callback) => (
  Array.isArray(obj) ?
    obj.forEach(callback)
    : Object.keys(obj).forEach(key => callback(obj[key], key))
);

export const filterList = cond => (data = []) => data.reduce((result, item) =>
  (cond(item, result, data) ? result.concat(item) : result), []);

export const randomItem = (list = []) => () => list[random(0, list.length)];
