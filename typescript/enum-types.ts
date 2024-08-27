// A look at three different types of enums
// * Enums with numeric indexes
// * Enums with non-numerical values

// A enum with numerical indexes
enum Weekdays {
  Monday = 1,   // set a starting index if you don't want 0
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

console.log(Weekdays.Monday); // => 1
console.log(Weekdays[1]); // => 'Monday'
console.log(Weekdays.Thursday); // => 4
console.log(Weekdays[4]); // => 'Thursday'

// If we look at the resulting POJO after transpile
// we can see that we have an object with 14 keys
// numberic keys and keys with the string values
console.log(Weekdays);

// --------------------------------------------------

// Enums with non-numerical values assigned to each key

enum Colors {
  White = '#fff',
  LightGray = '#ddd',
  DarkGray = '#666',
  Black = '#000'
}

function findByValue(_enum: any, value: any) {
  for (let key in _enum) {
    let val = _enum[key];
    if (val == value) { return key; }
  }
}

console.log(Colors.White); // => #fff
console.log(findByValue(Colors, '#fff')) // => White; 

// But in this case (when using non numeric values)
// we only get 4 keys in the resulting POJO:
console.log(Colors);


// --------------------------------------------------

// Const enums - a special type of enums


// A special type of enum is an enum constant
// main difference compared to 'normal' enums
// -> a enum constant generates NO JS code

// When? 
// * Can give a slight smaller compiled JS code base
// * Can optimize performance in extreme edge cases
// * When for some reason don't won't to allow 'lookup' 
//   dfrom value to key for the enum

const enum PlayerColors {
  X,
  O
}

console.log(PlayerColors.X); // => 0
console.log(PlayerColors.O); // => 1

// the following is not possible with const enums:
// console.log(PlayerColors[0]); 
// console.log(PlayerColors);