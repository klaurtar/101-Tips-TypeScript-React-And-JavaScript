type Users = {
  ryan: number;
  travis: number;
};

type Food = {
  broccoli: number;
  greenBeans: number;
};

type GrowType = {
  conventional: number;
  organic: number;
};

type UserData = {
  [user in keyof Users]: {
    [food in keyof Food]: {
      [growType in keyof GrowType]: number;
    };
  };
};

// type UserData = {
//     ryan: {
//         broccoli: {
//             conventional: number;
//             organic: number;
//         };
//         greenBeans: {
//             conventional: number;
//             organic: number;
//         };
//     };
//     travis: {
//         broccoli: {
//             conventional: number;
//             organic: number;
//         };
//         greenBeans: {
//             conventional: number;
//             organic: number;
//         };
//     };
// }

type FoodData = UserData[keyof Users];

// type FoodData = {
//     broccoli: {
//         conventional: number;
//         organic: number;
//     };
//     greenBeans: {
//         conventional: number;
//         organic: number;
//     };
// }

type GrowData = FoodData[keyof Food];

// type GrowData = {
//     conventional: number;
//     organic: number;
// }
