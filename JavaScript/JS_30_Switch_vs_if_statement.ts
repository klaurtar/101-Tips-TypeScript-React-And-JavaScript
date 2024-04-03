type UserType =
  | 'user'
  | 'guest'
  | 'analyticsManager'
  | 'contentManager'
  | 'admin';

let myUser: UserType = 'user';

const checkUserWithIf = (user: UserType) => {
  if (user === 'user' || user === 'guest') {
    console.log('User/Guest has access');
    // Do something only users and guests can do
  } else if (user === 'analyticsManager') {
    console.log('Analytics Manager has access');
    // Do something only analytics managers can do
  } else if (user === 'contentManager') {
    console.log('Content Manager has access');
    // Do something only content managers can do
  } else if (user === 'admin') {
    console.log('Admin has access');
    // Do something only admins can do
  }
};

const checkUserWithSwitch = (user: UserType) => {
  switch (user) {
    case 'user':
    case 'guest':
      console.log('User/Guest has access');
      // Do something only users and guests can do
      break;
    case 'analyticsManager':
      console.log('Analytics Manager has access');
      // Do something only analytics managers can do
      break;
    case 'contentManager':
      console.log('Content Manager has access');
      // Do something only content managers can do
      break;
    case 'admin':
      console.log('Admin has access');
      // Do something only admins can do
      break;
    default:
      const userNotHandled: never = user;
      throw new Error(`Unknown user type: ${userNotHandled}`);
      break;
  }
};

checkUserWithIf(myUser); // "User/Guest has access"
checkUserWithSwitch(myUser); // "User/Guest has access"
