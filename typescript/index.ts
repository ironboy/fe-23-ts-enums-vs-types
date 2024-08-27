import prompt from './helpers/prompt.js';
/*import chooseSongByWeekdayWithTypes
  from './song-by-weekday-type-unions.js';
import chooseSongByWeekdayWithEnum
  from './song-by-weekdays-enum.js';*/
import chooseSongByWeekdayWithNumEnum
  from './song-by-weekday-enum-with-numeric-indexes.js';

const weekday = prompt('Enter a weekday and I will choose a song: ');
// console.log(chooseSongByWeekdayWithTypes(weekday));
// console.log(chooseSongByWeekdayWithEnum(weekday));
console.log(chooseSongByWeekdayWithNumEnum(weekday));
