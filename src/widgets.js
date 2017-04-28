import { h2, select, option, div, img } from './dom';

export const $column = (title, items, onChange) => {
  const $title = h2();
  $title.innerHTML = title;

  const $select = select({ class: 'selector' }, {
    change: ev => onChange(items.filter(item => item.id === ev.target.value)[0]),
  });
  items.forEach((item) => {
    const $option = option({ value: item.id });
    $option.innerHTML = item.name;
    $select.appendChild($option);
  });

  const $container = div({ class: 'column' });
  $container.appendChild($title);
  $container.appendChild($select);
  return $container;
};

export const $card = ({ name, realName, portrait }) => {
  const $name = h2({ class: 'name' });
  $name.innerHTML = name;

  const $realName = h2({ class: 'real-name' });
  $realName.innerHTML = realName;

  const $portrait = img({ class: 'portrait', src: portrait });

  const $container = div({ class: 'card' });
  $container.appendChild($name);
  $container.appendChild($realName);
  $container.appendChild($portrait);
  return $container;
};
