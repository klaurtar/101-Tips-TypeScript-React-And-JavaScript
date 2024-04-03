const [resultTodos, resultPosts, resultComments] = await Promise.all([
  axios('https://jsonplaceholder.typicode.com/todos/1'),
  axios('https://jsonplaceholder.typicode.com/posts/1'),
  axios('https://jsonplaceholder.typicode.com/comments'),
]);

console.log(resultTodos); // {...}
console.log(resultPosts); // {...}
console.log(resultComments); // {...}
