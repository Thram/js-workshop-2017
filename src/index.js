/**
 * EXERCISE 4:
 * Your code is getting messy, move your code to `dom.js`, `tools.js`, `widgets.js`, `data.js`,
 * based on your code functionality.
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