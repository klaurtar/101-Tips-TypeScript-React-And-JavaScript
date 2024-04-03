const AbundantTypes = {
  id: '1e45fe',
  count: 2,
  isActive: true,
} 

type TypeOfAbundantTypes = typeof AbundantTypes;

// type TypeOfAbundantTypes = {
//     id: string;
//     count: number;
//     isActive: boolean;
// }

// ================================

const crayonColor = ['red', 'blue', 'black', 'orange'];

type TypeOfCrayonColors = typeof crayonColor;

// type TypeOfCrayonColors = string[]

// ================================

let job = "waste management";

type TypeOfJob = typeof job;

// type TypeOfJob = string

// ================================

const otherJob = "waste management";

type TypeOfOtherJob = typeof otherJob;

// type TypeOfOtherJob = "waste management"

// ================================

let myBoolean = true;

type TypeOfMyBoolean = typeof myBoolean;

// type TypeOfMyBoolean = true