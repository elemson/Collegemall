//  Regular function

function sayHi() {
  console.log("hey"); //cannot be paused
  return "hi";
}

const result = sayHi();
console.log(result); // result is elemson and  and hi

// eslint-disable-next-line require-yield
function* sayHiGenerator() {
  yield "hey";
  return "hi";
}

const resultGenerator = sayHiGenerator();
console.log(resultGenerator.next()); //{ value: 'hey', done: false }
