/**
 * EXERCISE 3:
 * Use compose, pipe or curry to improve the code, also:
 * - Replace the list with a select button
 * - Display the list in columns
 * - Create 2 cards widgets with the selected rivals showing: name, realName, portrait and stats
 * - Add the cards on top of the lists in 2 columns
 * - Render it into the DOM
 * - Use the styles on `base.css`
 */

import characters from './data.json';
import dom from './dom';
import { groupByAlignment } from './helpers';
import { forEach } from './tools';
import { card, alignmentColumn } from './widgets';


const alignments = groupByAlignment(characters);


const $rivals = dom.group('rivals');
const $characters = dom.group('characters');

dom.$root.appendChild($rivals);
dom.$root.appendChild($characters);

let lastSelected;
let $rival1 = card();
let $rival2 = card();

const selectRival = (character) => {
  const $newCharacter = card(character);
  if (!lastSelected || lastSelected === '$rival2') {
    $rivals.replaceChild($newCharacter, $rival1);
    $rival1 = $newCharacter;
    lastSelected = '$rival1';
  } else {
    $rivals.replaceChild($newCharacter, $rival2);
    $rival2 = $newCharacter;
    lastSelected = '$rival2';
  }
};
$rivals.appendChild($rival1);
$rivals.appendChild($rival2);

forEach(alignments, (value, key) =>
  $characters.appendChild(alignmentColumn(key, value, selectRival)));

