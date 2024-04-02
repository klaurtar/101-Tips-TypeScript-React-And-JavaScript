const myUrl = new URL(
  'https://www.example.com:8100/user/posts/comments?region=east&fun=lego#learn-more'
);

console.log(myUrl.protocol); // https:
console.log(myUrl.host); // www.example.com:8100
console.log(myUrl.pathname); // /user/posts/comments
console.log(myUrl.search); // ?region=east&fun=lego
console.log(myUrl.hash); // #learn-more
