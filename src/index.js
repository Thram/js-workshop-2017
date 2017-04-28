/**
 * EXERCISE 3:
 * Display the list in columns, use compose, pipe or curry (instead of templates)
 * to create helpers to build the following widgets:
 * - Column:
 * <div class="column">
 *  <h2>${title} (${items.length})</h2>
 *  <select onchange="onChange"></select>
 * </div>
 * - Card:
 * <div class="card">
 *  <h2 class="name">${name}</h2>
 *  <h2 class="real-name">${realName}</h2>
 *  <img class="portrait" src="${portrait}" />
 * </div>
 * Events:
 * - onChange: Update card
 */

import characters from './data.json';

const isEmpty = (obj = {}) => !Object.keys(obj).length;

const forEach = (obj, callback) => (
  Array.isArray(obj) ?
    obj.forEach(callback)
    : Object.keys(obj).forEach(key => callback(obj[key], key))
);

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
const h2 = createTag('h2');
const img = createTag('img');
const select = createTag('select');
const option = createTag('option');

const $column = (title, items, onChange) => {
  const $title = h2();
  $title.innerHTML = title;

  const $select = select({ class: 'selector' }, {
    change: ev => onChange(items.filter(item => item.id === ev.target.value)[0]),
  });
  items.forEach((item) => {
    const $option = option({ value: item.id });
    $option.innerHTML = item.name;
    $select.appendChild($option);
  });

  const $container = div({ class: 'column' });
  $container.appendChild($title);
  $container.appendChild($select);
  return $container;
};

const $card = ({ name, realName, portrait }) => {
  const $name = h2({ class: 'name' });
  $name.innerHTML = name;

  const $realName = h2({ class: 'real-name' });
  $realName.innerHTML = realName;

  const $portrait = img({ class: 'portrait', src: portrait });

  const $container = div({ class: 'card' });
  $container.appendChild($name);
  $container.appendChild($realName);
  $container.appendChild($portrait);
  return $container;
};

const addToAlignment = (init = [], item) => init.concat(item);

const byAlignment = (data = []) => data.reduce((result, item) => {
  const alignment = item.biography.alignment;
  return { ...result, [alignment]: addToAlignment(result[alignment], item) };
}, {});

const cleanList = characters.filter(item => !isEmpty(item.stats));

const alignments = byAlignment(cleanList);

const $selected = div({ class: 'group' });
const $lists = div({ class: 'group' });

Object.keys(alignments).forEach((key) => {
  $lists.appendChild($column(key, alignments[key], (item) => {
    $selected.innerHTML = '';
    $selected.appendChild($card(item));
  }));
});

const $root = document.getElementById('workshop');

$root.appendChild($selected);
$root.appendChild($lists);

