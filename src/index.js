/**
 * EXERCISE 3:
 * Use compose, pipe or curry to improve the code, also:
 * - Display the list in columns and improve styles using `styles.js`
 * - Make list behave like dropdowns
 * - Display them in different lists with the alignment as Title
 * - Display the total next to the title in the format "(number)"
 * - Render it into the DOM
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

const $root = document.getElementById('workshop');

const addToAlignment = (init = [], item) => init.concat(item);

const filterByStats = (data = []) => data.reduce((result, item) =>
  (!isEmpty(item.stats) ? result.concat(item) : result), []);

const byAlignment = (data = []) => data.reduce((result, item) => {
  const alignment = item.biography.alignment;
  result[alignment] = addToAlignment(result[alignment], item);
  return result;
}, {});

const cleanList = filterByStats(characters);
const alignments = byAlignment(cleanList);

Object.keys(alignments).forEach((key) => {
  $root.innerHTML += createList(key, alignments[key]);
});

