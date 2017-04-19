/**
 * Created by thram on 19/04/17.
 */
// Arrow functions

function Test() {
  // Scope Test
  this.foo = 'foo';
  function normalFunction() {
    // Scope normalFunction
    console.log('------------');
    console.log('Normal function');
    console.log('------------');
    console.log('They define their own scope so this.foo is undefined here:');
    console.log(this.foo);
    console.log('I have to define it inside the function to see it:');
    this.foo = 'bar';
    console.log(this.foo);
  }

  const arrowFunction = () => {
    // Scope Test
    console.log('------------');
    console.log('Arrow function');
    console.log('------------');
    console.log('They keep their parent scope so it can read this.foo from the parent:');
    console.log(this.foo);
  };
  return { normalFunction, arrowFunction };
}

export default function () {
  console.log('*************');
  console.log('Arrow Functions');
  console.log('*************');
  const t = new Test();
  t.normalFunction();
  t.arrowFunction();
}
