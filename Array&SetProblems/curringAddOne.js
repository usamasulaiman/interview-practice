// addone adds 1 when called once,
// will return another nested function to support currying calls
// will add a getValue function finally to get the values

function addOne() {
  let val = 1; // because first time it adds one always
  const adder = () => {
      val++;
      return adder; // for subsequent calls
  }
  adder.getValue = () => val;
  return adder;
}

console.log(addOne()()().getValue()); // 3
console.log(addOne().getValue()); // 1
console.log(addOne()().getValue()); // 2