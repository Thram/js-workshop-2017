/**
 * Created by thram on 19/04/17.
 */
import { compose, curry, pipe } from '../src/fp';

const currying = () => {
  console.log('------------');
  console.log('curry');
  console.log('------------');
  const sum3 = curry((one, two, three) => one + two + three);
  console.log('sum3 accept 3 params, [sum3(one, two, three)]');
  console.log('by using curry we can also call it like [sum3(one)(two)(three)]');
  console.log('and expect the same result:');
  console.log('sum3(2, 4, 4):', sum3(2, 4, 4));
  console.log('sum3(2)(4)(4):', sum3(2)(4)(4));
};
const piping = () => {
  console.log('------------');
  console.log('pipe');
  console.log('------------');
  const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  const filterOdd = numbers => numbers.reduce((res, number) => (
    number % 2 === 1 ? res.concat(number) : res
  ), []);
  const sum = numbers => numbers.reduce((res, number) => res + number, 0);

  console.log('with pipe we define a sequence of functions that will be processed from top to bottom');
  console.log('the result will ne the same than execute them manually in sequence:');
  const sumOdds = pipe(filterOdd, sum);
  console.log('sum(filterOdd(fibonacci)):', sum(filterOdd(fibonacci)));
  console.log('sumOdds = pipe(filterOdd, sum):', sumOdds(fibonacci));
};

const composing = () => {
  console.log('------------');
  console.log('compose');
  console.log('------------');
  console.log('compose is like pipe but in reverse it goes from bottom to top:');
  console.log('25 + 3 * (x + 1)');
  const add = x => v => x + v;
  const by = x => v => x * v;
  const add1 = add(1);
  const by3 = by(3);
  const add25 = add(25);
  const formula = compose(add25, by3, add1);
  console.log('add25(by3(add1(x))):', add25(by3(add1(4))));
  console.log('formula = compose(add25, by3, add1)', formula(4));
};


export default function () {
  console.log('*************');
  console.log('Functional Programming');
  console.log('*************');
  currying();
  piping();
  composing();
}

