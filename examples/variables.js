/**
 * Created by thram on 18/04/17.
 */
// Variable Types

function constExample() {
  console.log('------------');
  console.log('const');
  console.log('------------');
  const constant = 'I\'m constant!';

  console.log(constant);

// constant = 'I\'m a constant!!!'; // Constant cannot be reassigned

// But that doesn't mean that they are immutables

  const notConstant = { msg: 'I\'m not constant' };

  console.log(notConstant.msg);

  notConstant.msg = 'Told ya!';

  console.log(notConstant.msg);
}
// What's the difference between using “let” and “var” to declare a variable?

// Scopes:

function letExample() {
  console.log('------------');
  console.log('let');
  console.log('------------');
  // count is *not* visible out here (Error!)
  // console.log('Before Block', count);
  for (let count = 0; count < 5; count += 1) {
    // count is only visible in here (and in the for() parentheses)
    // and there is a separate count variable for each iteration of the loop
    console.log('Block', count);
  }
  // count is *not* visible out here (Error!)
  // console.log('After Block', count);
}

function varExample() {
  console.log('------------');
  console.log('var');
  console.log('------------');
  // count *is* visible out here (No error)
  console.log('Before Block', count);
  for (var count = 0; count < 5; count += 1) {
    // count is visible to the whole function
    console.log('Block', count);
  }
  // count *is* visible out here (No error)
  console.log('After Block', count);
}

export default function () {
  console.log('*************');
  console.log('Variables Type');
  console.log('*************');
  constExample();
  varExample();
  letExample();
}
