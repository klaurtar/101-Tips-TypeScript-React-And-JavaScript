type Friends = 'Jasper' | 'Elara' | 'Zara';

const findFriendsFavoriteFood = (friend: Friends) => {
  switch (friend) {
    case 'Jasper':
      return 'Chicken and Rice';
    case 'Elara':
      return 'Chia Seed Pudding';
    default:
      // TS Error: Type 'string' is not assignable to type 'never' because Zara is not handled!
      const exhaustivenessCheck: never = friend;
      throw new Error(`Error: ${exhaustivenessCheck} case is not handled!`);
  }
};

findFriendsFavoriteFood('Zara'); // 🚫 Error: Zara case is not handled!
