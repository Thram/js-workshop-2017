/**
 * Created by thram on 19/04/17.
 */
const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

const map = () => {
  console.log('------------');
  console.log('map');
  console.log('------------');
  console.log('It goes through the array, applies a transformation on each item and returns a transformed NEW Array.');
  console.log('Before map:', fibonacci);
  console.log('Mapped result:', fibonacci.map(f => f + 1));
  console.log('After map:', fibonacci);
};

const reduce = () => {
  console.log('------------');
  console.log('reduce');
  console.log('------------');
  console.log('It goes through the array, applies a transformation and returns a NEW value as result of the transformations applied.');
  console.log('Before reduce:', fibonacci);
  console.log('Reduced result:', fibonacci.reduce((acc, f) => acc + f, 0));
  console.log('After reduce:', fibonacci);
};

const forEach = () => {
  console.log('------------');
  console.log('forEach');
  console.log('------------');
  console.log('It goes through the array, allowing you to treat your items individually. No data transformation or results.');
  console.log('Before forEach:', fibonacci);
  console.log('ForEach result:', fibonacci.forEach(f => console.log(`Fibonacci ${f}`)));
  console.log('After forEach:', fibonacci);
};

export default function () {
  console.log('*************');
  console.log('Arrays');
  console.log('*************');
  map();
  reduce();
  forEach();
}
