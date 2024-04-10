type Users = {
  ryan: number;
  travis: number;
};

type GrowType = {
  conventional: number;
  organic: number;
};

type UserGrowInfo = {
  [user in keyof Users]: {
    [userSecondary in user]: {
      [growType in keyof GrowType]: number;
    };
  };
}[keyof Users];

// ✅ UserGrowInfo is ryan object OR travis object

// type UserGrowInfo = {
//     ryan: {
//         conventional: number;
//         organic: number;
//     };
// } | {
//     travis: {
//         conventional: number;
//         organic: number;
//     };
// }

const getUserGrowInfo = (): UserGrowInfo => {
  // ✅ This meets the UserGrowInfo return type!
  return {
    ryan: {
      conventional: 46,
      organic: 82,
    },
  };
};
