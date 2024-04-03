interface BreakfastChecklist {
  food: boolean;
  silverware: boolean;
  plate: boolean;
}

// Type Declaration
const myBreakfastChecklist: BreakfastChecklist = {
  food: true,
  silverware: false,
  plate: true,
  television: true, // 'television' does not exist in type 'BreakfastChecklist' 🚫
};

// Type Assertion
const myfriendsBreakfastChecklist = {
  food: true,
  silverware: false,
  plate: true,
  television: true,
} as BreakfastChecklist; // no errors! This may not be what you want...
