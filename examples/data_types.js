/**
 * Created by thram on 18/04/17.
 */
// Data Types
function primitives() {
  console.log('------------');
  console.log('Primitives');
  console.log('------------');

  const string = "I'm a string";
  const too = 'TOO!';
  const template = `I'm a string ${too}`;
  const number = 1835;
  const bool = true;
  const notDefined = undefined;
  const noValue = null;
  console.log('String', string);
  console.log('Type String', typeof string);
  console.log('String Template', template);
  console.log('Type String Template', typeof template);
  console.log('Number', number);
  console.log('Type Number', typeof number);
  console.log('Boolean', bool);
  console.log('Type Boolean', typeof bool);
  console.log('Undefined', notDefined);
  console.log('Type Undefined', typeof notDefined);
  console.log('Null', noValue);
  console.log('Type Null', typeof noValue);
}

function nonPrimitives() {
  console.log('------------');
  console.log('Non-Primitives');
  console.log('------------');

  const object = { foo: 'foo', bar: 'bar' };
  const array = ['foo', 'bar'];
  const regex = /foo/;
  console.log('Object', object);
  console.log('Type Object', typeof object);
  console.log('Array', array);
  console.log('Type Array', typeof array);
  console.log('Regex', regex);
  console.log('Type Regex', typeof regex);
}

function functions() {
  console.log('------------');
  console.log('Functions');
  console.log('------------');

  class Test {
    constructor() {
      this.foo = 'bar';
    }

    getTest() {
      console.log(this.foo);
    }
  }

  const func = () => console.log('Test');
  const testIntance = new Test();
  console.log('Function', func);
  console.log('Type Function', typeof func);
  console.log('Class', Test);
  console.log('Type Class', typeof Test);
  console.log('Instance', testIntance);
  console.log('Type Instance', typeof testIntance);
}


export default () => {
  console.log('*************');
  console.log('Data Types');
  console.log('*************');
  primitives();
  nonPrimitives();
  functions();
};
