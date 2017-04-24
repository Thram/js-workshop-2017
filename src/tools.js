/**
 * Created by thram on 25/04/17.
 */
export const random = (min = 0, max = 99) => Math.round(((max - min) * Math.random()) + min);

export const isEmpty = (obj = {}) => !Object.keys(obj).length;

export const forEach = (obj, callback) => (
  Array.isArray(obj) ?
    obj.forEach(callback)
    : Object.keys(obj).forEach(key => callback(obj[key], key))
);

export const reduce = (obj, callback, init) => (
  Array.isArray(obj) ?
    obj.reduce(callback, init)
    : Object.keys(obj).reduce((acc, key) => callback(acc, obj[key], key), init)
);

export const times = (number, callback) => (new Array(number))
  .join('.')
  .split('.')
  .map((value, index) => callback(index));