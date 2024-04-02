const date = new Date(2024, 1, 26, 5, 0, 0);

// Basic Date format

const usDateFormatter = new Intl.DateTimeFormat('en-US');
const jpDateFormatter = new Intl.DateTimeFormat('ja-JP');
const inDateFormatter = new Intl.DateTimeFormat('en-IN');

console.log(usDateFormatter.format(date)); // "2/26/2024"
console.log(jpDateFormatter.format(date)); // "2024/2/26"
console.log(inDateFormatter.format(date)); // "26/2/2024"

// Customizing format

const longFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
});

console.log(longFormatter.format(date)); // "Monday, February 26, 2024"

// Timezones

const newYorkFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  hour: 'numeric',
  minute: 'numeric',
});

console.log(newYorkFormatter.format(date)); // "6:00 AM"

// Relative Time

const relativeTimeFormatter = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
});
console.log(relativeTimeFormatter.format(-1, 'day')); // "yesterday"
console.log(relativeTimeFormatter.format(2, 'week')); // "in 2 weeks"
