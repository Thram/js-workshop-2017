/**
 * Created by thram on 18/04/17.
 */

const foo = 'foo';
const bar = 'bar';


function assign() {
  console.log('------------');
  console.log('Assign value');
  console.log('------------');
  const oFoo = { foo };
  // is equal to do:
  const oldFoo = { foo: foo };
  console.log(oFoo, oldFoo);
}

function spread() {
  console.log('------------');
  console.log('Assign with Spread operator');
  console.log('------------');
  const oFoo = { foo };
  const oBar = { bar };

  console.log('------------');
  console.log('Objects');
  console.log('------------');
  const oFooBar = { ...oFoo, ...oBar };
  const oldFooBar = Object.assign({}, oFoo, oBar);
  console.log('{ ...oFoo, ...oBar }');
  console.log(oFooBar);
  console.log('is equal to do: Object.assign({}, oFoo, oBar)');
  console.log(oldFooBar);

  console.log('------------');
  console.log('Arrays');
  console.log('------------');
  const aFooBar = [foo, bar];
  const aFooBarSpread = [...aFooBar, 'cap', 'del'];
  const aFooBarConcat = [].concat(aFooBar, ['cap', 'del']);
  console.log("[...aFooBar, 'cap', 'del']");
  console.log(aFooBarSpread);
  console.log("is equal to do: [].concat(aFooBar, ['cap', 'del'])");
  console.log(aFooBarConcat);
  console.log('or the otherway');
  const aFooBarSpread2 = ['cap', 'del', ...aFooBar];
  const aFooBarConcat2 = [].concat(['cap', 'del'], aFooBar);
  console.log("['cap', 'del', ...aFooBar]");
  console.log(aFooBarSpread2);
  console.log("is equal to do: [].concat(['cap', 'del'], aFooBar)");
  console.log(aFooBarConcat2);
}

function deconstruction() {
  console.log('------------');
  console.log('Deconstruction');
  console.log('------------');
  const [fooD, barD, ...tailD] = ['foo', 'bar', 'cap', 'del'];
  console.log('From array:');
  console.log(fooD);
  console.log(barD);
  console.log(tailD);

  console.log('From object:');
  const blep = { blop: 'blop' };
  const { blop } = blep;
  console.log(blop); // 'blop'

  console.log('From object argument:');
  const func = ({ bla }) => console.log('Function', bla);
  func({ bla: 'bla', ble: 'ble' });

  console.log('Arguments as array using spread operator:');
  const func2 = (...args) => console.log('Arguments as array', args);
  func2(1,2,3,4);
  console.log('From arguments using spread operator to get the tail:');
  const func3 = (one, two, ...tail) => console.log('Arguments as array', one, two, tail);
  func3(1,2,3,4);
}

export default function () {
  console.log('*************');
  console.log('Assignments');
  console.log('*************');
  assign();
  spread();
  deconstruction();
}
