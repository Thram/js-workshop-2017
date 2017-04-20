/**
 * Created by thram on 20/04/17.
 */
import dom from './dom';
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

export const card = (item = {}) => {
  const $card = dom.div({ class: 'card' });
  console.log(item);
  if (item.name) {
    const $name = dom.title({ class: 'name' });
    $name.innerHTML = item.name;
    $card.appendChild($name);
  }

  if (item.realName) {
    const $realName = dom.title({ class: 'real-name' });
    $realName.innerHTML = item.realName;
    $card.appendChild($realName);
  }

  const $portrait = dom.div({
    class: 'portrait',
    style: `background-image: url(${item.portrait})`,
  });
  $card.appendChild($portrait);

  const $stats = dom.div({ class: 'stats' });
  const $intelligence = dom.label({ class: 'stats' });
  const $strength = dom.label({ class: 'stats' });
  const $speed = dom.label({ class: 'stats' });
  const $durability = dom.label({ class: 'stats' });
  const $power = dom.label({ class: 'stats' });
  const $combat = dom.label({ class: 'stats' });

  $card.appendChild($stats);

  const $column = dom.column();
  $column.appendChild($card);
  return $column;
};

export default { selector, alignmentColumn, card };
