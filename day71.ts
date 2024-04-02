const myObj = {
  name: 'Ryan',
  pet: 'B.B.',
  hobby: 'Coding',
  favoriteFood: 'Macaroni',
};

// Want to write data if no value exists?

// This...
myObj.favoriteFood = myObj.favoriteFood || 'Pizza';

// Can become this! ✅
myObj.favoriteFood ||= 'Pizza';

// Want to write new data if a value does exist?

// This...
myObj.favoriteFood = myObj.favoriteFood && 'Pasta';

// Can become this! ✅
myObj.favoriteFood &&= 'Pasta';

// Want to write new data if a value is null or undefined?

// This...
myObj.favoriteFood = myObj.favoriteFood ?? 'Ramen';

// Can become this! ✅
myObj.favoriteFood ??= 'Ramen';
