import { forEach } from './tools';

const setAttr = attr => (el, value) => el.setAttribute(attr, value);
const setAttrs = (el, attrs) => forEach(attrs, (value, attr) => setAttr(attr)(el, value));

const addEvents = (el, events) =>
  forEach(events, (callback, event) => el.addEventListener(event, callback));

const createTag = tag => (attrs = {}, events = {}) => {
  const $element = document.createElement(tag);
  setAttrs($element, attrs);
  addEvents($element, events);
  return $element;
};

export const div = createTag('div');
export const h1 = createTag('h1');
export const h2 = createTag('h2');
export const img = createTag('img');
export const select = createTag('select');
export const option = createTag('option');
export const button = createTag('button');
export const label = createTag('label');
export const span = createTag('span');

export default {
  div, h1, h2, img, select, option, button, label, span,
};
