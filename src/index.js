/**
 * EXERCISE 2:
 * List all the items on the file:
 * - Filter the ones that have no stats
 * - Separate them by alignment
 * - Display them in different lists with the alignment as Title
 * - Display the total next to the title in the format "(number)"
 * - Render it into the DOM
 */

import characters from './data.json';

const isEmpty = (obj = {}) => !Object.keys(obj).length;

const createItem = ({ name }) => `<li>${name}</li>`;

const createList = (title, items) => `
    <h2>${title} (${items.length})</h2>
    <ul>${items.map(createItem).join('')}</ul>
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

