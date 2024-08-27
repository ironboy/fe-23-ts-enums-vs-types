// Type unions vs enums
// When to use unions and when to enums?
// Advantages and disadvantages of each approach

// import prompt from './helpers/prompt.js';

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
export default function chooseSongByWeekday(weekday: Weekday) {

  // enums allow for type guarding earlier on in our code
  // than type unions
  if (!(weekday in Weekday)) {
    throw new Error('Invalid weekday');
  }

  // enums let us use the enum key in our switches
  // which makes for cleaner more declartive code
  switch (weekday) {
    case Weekday.Monday:
      return 'Manic Monday - The Bangles'
    case Weekday.Tuesday:
      return 'Ruby Tuesday - The Rolling Stones'
    case Weekday.Wednesday:
      return 'Wednesday Week - The Undertones'
    case Weekday.Thursday:
      return `Thursday's child - David Bowie`
    case Weekday.Friday:
      return `Friday I'm In Love - The Cure`
    case Weekday.Saturday:
      return 'Saturday Night - The Misfits'
    case Weekday.Sunday:
      return 'Sunday Morning - The Velvet Underground'
  }
}

/*
const chosenWeekday = prompt(`Choose a weekday and you'll get a song suggestion: `);
console.group(chooseSongByWeekday(chosenWeekday));
*/
