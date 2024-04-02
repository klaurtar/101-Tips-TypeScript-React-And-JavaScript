interface Computer {
  manufacturer?: string;
  os?: {
    name: string;
    version?: string;
  };
}

const myVagueComputer: Computer = {
  manufacturer: 'Apple',
};

console.log(myVagueComputer.os?.version); // undefined

const myPreciseComputer: Computer = {
  manufacturer: 'Apple',
  os: {
    name: 'macOS',
    version: '11.0',
  },
};

console.log(myPreciseComputer.os?.version); // '11.0'
