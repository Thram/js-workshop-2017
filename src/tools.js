/**
 * Created by thram on 20/04/17.
 */
// Tools
export const isEmpty = (obj = {}) => !Object.keys(obj).length;
export const forEach = (obj, callback) => (
  Array.isArray(obj) ?
    obj.forEach(callback)
    : Object.keys(obj).forEach(key => callback(obj[key], key))
);

export const filterList = cond => (data = []) => data.reduce((result, item) =>
  (cond(item, result, data) ? result.concat(item) : result), []);