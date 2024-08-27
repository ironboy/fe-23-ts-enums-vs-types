// Type unions vs enums
// When to use unions and when to enums?
// Advantages and disadvantages of each approach

// import prompt from './helpers/prompt.js';

// Union type with weekdays
type Weekday = 'Monday' | 'Tuesday' | 'Wednesday'
  | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

// A function using the union type as type for the weekday parameter
// and a switch to return a corresponding value
export default function chooseSongByWeekday(weekday: Weekday) {
  switch (weekday) {
    case 'Monday':
      return 'Manic Monday - The Bangles'
    case 'Tuesday':
      return 'Ruby Tuesday - The Rolling Stones'
    case 'Wednesday':
      return 'Wednesday Week - The Undertones'
    case 'Thursday':
      return `Thursday's child - David Bowie`
    case 'Friday':
      return `Friday I'm In Love - The Cure`
    case 'Saturday':
      return 'Saturday Night - The Misfits'
    case 'Sunday':
      return 'Sunday Morning - The Velvet Underground'
    default:
      // Type guard
      // Throw an error if the weekday is invalid
      throw new Error('Invalid weekday');
  }
}

/*
const chosenWeekday = prompt(`Choose a weekday and you'll get a song suggestion: `);
console.group(chooseSongByWeekday(chosenWeekday));
*/

