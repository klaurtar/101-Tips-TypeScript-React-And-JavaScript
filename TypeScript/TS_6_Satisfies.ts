interface User {
  lastName: string;
  birthYear: number;
}

type ID = string;

type Database = Record<string, User | ID>;

// 🚫 each property's value will be type string | User.
const myData: Database = {
  ryan: 'ID3298393',
  joe: {
    lastName: 'Fonti',
    birthYear: 1934,
  },
};

// Property 'toLowerCase' does not exist on type 'string | User'.
myData.ryan.toLowerCase();

// ✅ satisfies Database pre-validates ryan is string and joe is User. No more string | User!
const myOtherData = {
  ryan: 'ID3298393',
  joe: {
    lastName: 'Fonti',
    birthYear: 1934,
  },
} satisfies Database;

// This now works!
myOtherData.ryan.toLowerCase(); // id3298393
