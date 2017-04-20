/**
 * Created by thram on 20/04/17.
 */
import dom from './dom';
import { COLORS } from './helpers';
import { filterList } from './tools';

export const selector = (options, events) => {
  const $select = dom.select({ class: 'selector' }, events);
  options.forEach((option) => {
    const $option = dom.option({ value: option.id });
    $option.innerHTML = option.name;
    $select.appendChild($option);
  });
  return $select;
};


export const alignmentColumn = (title, items, onSelect) => {
  const $column = dom.column();
  const $title = dom.title();
  $title.innerHTML = `${title} (${items.length})`;
  $column.appendChild($title);
  const filterById = id => filterList(item => item.id === id)(items);
  $column.appendChild(selector(items, {
    change: ev => onSelect(filterById(ev.target.value)[0]),
  }));
  return $column;
};


export const card = (character = {}) => {
  const $card = dom.div({ class: 'card' });
  if (character.name) {
    const $name = dom.title({ class: 'name' });
    $name.innerHTML = character.name;
    $card.appendChild($name);
  }

  if (character.realName) {
    const $realName = dom.title({ class: 'real-name' });
    $realName.innerHTML = character.realName;
    $card.appendChild($realName);
  }

  const $portrait = dom.div({
    class: 'portrait',
    style: character.portrait ? `background-image: url(${character.portrait})` : '',
  });
  $card.appendChild($portrait);

  const $container = dom.column();
  $container.appendChild($card);

  if (character.stats) {
    const $statsContainer = dom.div({ class: 'stats' });
    const stats = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];

    stats.forEach((stat) => {
      const value = character.stats[stat];
      const $stat = dom.div();
      const $name = dom.label();
      const $value = dom.span({ style: `width: ${value}%; background-color: ${COLORS.red};` });
      $name.innerText = `${stat}: ${value}`;
      $stat.appendChild($name);
      $stat.appendChild($value);
      $statsContainer.appendChild($stat);
    });

    $container.appendChild($statsContainer);
  }
  $container.character = character;
  return $container;
};

export default { selector, alignmentColumn, card };
