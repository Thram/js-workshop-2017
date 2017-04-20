/**
 * Created by thram on 20/04/17.
 */
import { forEach } from './tools';

const $root = document.getElementById('workshop');

const setAttr = attr => (el, value) => el.setAttribute(attr, value);
const setAttrs = (el, attrs) => forEach(attrs, (value, attr) => setAttr(attr)(el, value));

const addEvents = (el, events) =>
  forEach(events, (callback, event) =>
    el.addEventListener(event, callback));

const createTag = tag => (attrs = {}, events = {}) => {
  const $element = document.createElement(tag);
  setAttrs($element, attrs);
  addEvents($element, events);
  return $element;
};

const div = createTag('div');

export default {
  $root,
  get: (selector, element) => (element || $root).querySelectorAll(selector),
  create: createTag,
  div,
  bigTitle: createTag('h1'),
  title: createTag('h2'),
  select: createTag('select'),
  option: createTag('option'),
  input: createTag('input'),
  image: createTag('img'),
  label: createTag('label'),
  group: classes => div({ class: `group ${classes}` }),
  column: classes => div({ class: `column ${classes}` }),
};
