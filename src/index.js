/**
 * EXERCISE 1:
 * Using the data provided:
 * - Retrieve the first value
 * - Create a function that receives an object and add a <li> to $list with the attribute `name`
 * - Render it into the DOM
 */

import data from './data.json';

function createItem({ name }) {
  return `<li>${name}</li>`;
}

const $root = document.getElementById('workshop');
const $list = document.createElement('ul');

$root.appendChild($list);

const [first] = data;

$list.innerHTML += createItem(first);

