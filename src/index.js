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

const createItem = ({ name }) => `<li>${name}</li>`;

const createList = (title, items) => `
    <div>
    <h2>${title} (${items.length})</h2>
    <ul>${items.map(createItem).join('')}</ul>
    </div>
`;

const addToAlignment = (init = [], item) => init.concat(item);

const byAlignment = (data = []) => data.reduce((result, item) => {
  const alignment = item.biography.alignment;
  return { ...result, [alignment]: addToAlignment(result[alignment], item) };
}, {});

const cleanList = characters.filter(item => !isEmpty(item.stats));

const alignments = byAlignment(cleanList);

const $root = document.getElementById('workshop');

Object.keys(alignments).forEach((key) => {
  $root.innerHTML += createList(key, alignments[key]);
});

