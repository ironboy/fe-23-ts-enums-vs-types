// Type unions vs enums
// When to use unions and when to enums?
// Advantages and disadvantages of each approach

import prompt from './helpers/prompt.js';

// A enum with weekdays
// - a common sight - the enum has the values that are identical to its keys
enum Weekday {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

// A function using the union type as type for the weekday parameter
// and a switch to return a corresponding value
function chooseSongByWeekday(weekday: Weekday) {

  // enums allow for type guarding earlier on in our code
  // than type unions
  if (!(weekday in Weekday)) {
    throw new Error('Invalid weekday');
  }

  // A more compact alternative to a case switch
  // is sometimes (quite often) an object that 
  // works a map/dictionary
  const mapDayToSong: any = {
    Monday: 'Manic Monday - The Bangles',
    Tuesday: 'Ruby Tuesday - The Rolling Stones',
    Wednesday: 'Wednesday Week - The Undertones',
    Thursday: `Thursday's child - David Bowie`,
    Friday: `Friday I'm In Love - The Cure`,
    Saturday: 'Saturday Night - The Misfits',
    Sunday: 'Sunday Morning - The Velvet Underground'
  }
  return mapDayToSong[weekday];

}

const chosenWeekday = prompt(`Choose a weekday and you'll get a song suggestion: `);
console.group(chooseSongByWeekday(chosenWeekday));


