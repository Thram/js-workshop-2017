/**
 * Created by thram on 25/04/17.
 */

export const isEmpty = (obj = {}) => !Object.keys(obj).length;

export const forEach = (obj, callback) => (
  Array.isArray(obj) ?
    obj.forEach(callback)
    : Object.keys(obj).forEach(key => callback(obj[key], key))
);