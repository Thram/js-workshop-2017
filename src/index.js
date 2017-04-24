/**
 * EXERCISE 5: (Wrap up)
 * Finish the app, implement the game API and the following widgets:
 * - Stats
 *  <div class="stats">
 *    <div>
 *      <label>${name}</label>
 *      <span style="width: ${value}%"></span>
 *    </div>
 *  </div>
 * - Fight Button
 *  <button class="fight" onclick="onClick">Fight!</button>
 * - Random Button
 *  <button class="random" onclick="onClick"></button>
 * - Winner Banner
 *  <h2 class="result">${name}</h2>
 * Events:
 *  - Fight onClick: Run fight function from the API and display the result
 *  - Random onClick: Select 2 random fighters
 */

import { getAlignments } from './data';
import { forEach } from './tools';
import { div } from './dom';
import { $column, $card } from './widgets';

const alignments = getAlignments();

const $rivals = [div({ class: 'group' }), div({ class: 'group' })];
const $arena = div({ class: 'group' });

const $left = div({ class: 'column' });
$left.appendChild($rivals[0]);
$arena.appendChild($left);

const $right = div({ class: 'column' });
$right.appendChild($rivals[1]);
$arena.appendChild($right);

const $lists = div({ class: 'group' });
let lastSelected = -1;
forEach(alignments, (value, key) => {
  $lists.appendChild($column(key, value, (item) => {
    const selected = lastSelected !== 0 ? 0 : 1;
    $rivals[selected].innerHTML = '';
    $rivals[selected].appendChild($card(item));
    lastSelected = selected;
  }));
});

const $root = document.getElementById('workshop');

$root.appendChild($arena);
$root.appendChild($lists);