/**
 * EXERCISE 3:
 * Use compose, pipe or curry to improve the code, also:
 * - Replace the list with a select button
 * - Display the list in columns
 * - Create 2 cards widgets with the selected rivals showing:
 *     - name
 *     - realName
 *     - portrait
 *     - stats: intelligence, strength, speed, durability, power, combat
 * - Add the cards on top of the lists in 2 columns
 * - Render it into the DOM
 * - Use the styles on `base.css`
 */

import characters from './data.json';
import dom from './dom';
import { fight } from './game';
import { groupByAlignment } from './helpers';
import { forEach, randomItem } from './tools';
import { card, alignmentColumn, } from './widgets';

const alignments = groupByAlignment(characters);
const randomGood = randomItem(alignments.good);
const randomBad = randomItem(alignments.bad);

const $arena = dom.group('arena');
const $characters = dom.group('characters');

dom.$root.appendChild($arena);
dom.$root.appendChild($characters);


let lastSelected;
const $rivals = [card(randomGood()), card(randomBad())];
const $winner = dom.title({ class: 'winner' });

const selectRival = (rival, character) => {
  const $newCharacter = card(character);
  $winner.className = 'winner';
  $arena.replaceChild($newCharacter, $rivals[rival]);
  $rivals[rival] = $newCharacter;
  lastSelected = rival;
};

const toggleRival = character => selectRival(lastSelected === 0 ? 1 : 0, character);

const $random = dom.button({ class: 'random' }, {
  click: () => {
    toggleRival(randomGood());
    toggleRival(randomBad());
  },
});
const $fight = dom.button({ class: 'fight' }, {
  click: () => {
    const winner = fight($rivals.map($rival => $rival.character));
    $winner.innerText = winner.name;
    $winner.className = 'winner show';
  },
});
$fight.innerText = 'Fight!';


$rivals.map($rival => $arena.appendChild($rival));
$arena.appendChild($random);
$arena.appendChild($fight);
$arena.appendChild($winner);

forEach(alignments, (value, key) =>
  $characters.appendChild(alignmentColumn(key, value, toggleRival)));

