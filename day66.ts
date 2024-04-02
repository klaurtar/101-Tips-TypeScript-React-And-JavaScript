const exampleObject = {
  text: 'hello',
  onChange: () => 'example',
  age: 28,
};

const { onChange, ...everythingElse } = exampleObject;

console.log(everythingElse); // { text: 'hello', age: 28 }
