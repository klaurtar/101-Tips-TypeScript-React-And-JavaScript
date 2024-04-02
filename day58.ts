const uglyJson = {
  name: 'John Doe',
  age: 30,
  is_student: false,
  courses: ['Math', 'Science', 'English'],
  address: { street: '123 Main St', city: 'Anytown', zip: '12345' },
};

// 🚫 Ugly JSON with no formatting
console.log(JSON.stringify(uglyJson));
// {"name":"John Doe","age":30,"is_student":false,"courses":["Math","Science","English"],"address":{"street":"123 Main St","city":"Anytown","zip":"12345"}}

// ✅ Pretty Json with 2 space formatting
console.log(JSON.stringify(uglyJson, null, 2));
// {
//   "name": "John Doe",
//   "age": 30,
//   "is_student": false,
//   "courses": [
//     "Math",
//     "Science",
//     "English"
//   ],
//   "address": {
//     "street": "123 Main St",
//     "city": "Anytown",
//     "zip": "12345"
//   }
// }
