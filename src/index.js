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

function createItem({ name }) {
  return `<li>${name}</li>`;
}

const $root = document.getElementById('workshop');
const $list = document.createElement('ul');

$root.appendChild($list);

const [first] = characters;

$list.innerHTML += createItem(first);

