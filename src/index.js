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

import { getAlignments, getRandomCharacter, getCharacter } from './data';
import { forEach, times } from './tools';
import { div, h1, h2, button } from './dom';
import { $column, $card, $stats } from './widgets';
import { fight } from './game';

const RIVALS = 2;

const alignments = getAlignments();
const rivals = times(RIVALS, () => ({
  $character: div({ class: 'group rival' }),
  $stats: div({ class: 'group' }),
}));
const $arena = div({ class: 'group arena' });

let lastSelected = -1;
const selectCharacter = characters => (character) => {
  const selected = lastSelected !== 0 ? 0 : 1;
  const rival = characters[selected];
  rival.item = character;
  rival.$character.innerHTML = '';
  rival.$character.appendChild($card(character));
  rival.$stats.innerHTML = '';
  rival.$stats.appendChild($stats(character.stats));
  lastSelected = selected;
};

const selectRival = selectCharacter(rivals);

const selectRandom = () => {
  selectRival(getRandomCharacter());
  selectRival(getRandomCharacter());
};

selectRandom();

let $banner;

const removeBanner = () => {
  if ($banner) {
    $arena.removeChild($banner);
    $banner = undefined;
  }
};

const setBanner = (name) => {
  removeBanner();
  $banner = h2({ class: 'result' });
  $banner.innerHTML = name;
  $arena.appendChild($banner);
};

const $fight = button(
  { class: 'fight' },
  {
    click: () => {
      const [result, battles] = fight(rivals.map($rival => $rival.item));
      const character = getCharacter(result.winner);
      setBanner(character.name);
      console.log(battles);
    },
  },
);
$fight.innerHTML = 'Fight!';
$arena.appendChild($fight);

const $random = button({ class: 'random' }, {
  click: () => {
    removeBanner();
    selectRandom();
  },
});
$arena.appendChild($random);

const $left = div({ class: 'column' });
$left.appendChild(rivals[0].$character);
$left.appendChild(rivals[0].$stats);
$arena.appendChild($left);

const $right = div({ class: 'column' });
$right.appendChild(rivals[1].$character);
$right.appendChild(rivals[1].$stats);
$arena.appendChild($right);

const $lists = div({ class: 'group' });
forEach(alignments, (value, key) => $lists.appendChild($column(key, value, selectRival)));

const $mainTitle = h1({ class: 'main-title' });
$mainTitle.innerHTML = 'Who will win this time?';
const $root = document.getElementById('workshop');

$root.appendChild($mainTitle);
$root.appendChild($arena);
$root.appendChild($lists);
