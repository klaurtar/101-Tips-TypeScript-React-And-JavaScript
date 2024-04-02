const myHugeArray = new Array(1000000).fill('😊');

// for loop
for (let i = 0; i < myHugeArray.length; i++) {
  console.log(myHugeArray[i]);
}

// while loop incrementing down
let i = myHugeArray.length;
while (i--) {
  console.log(myHugeArray[i]);
}

// for loop with cached array length inlined
for (let i = 0, l = myHugeArray.length; i < l; i++) {
  console.log(myHugeArray[i]);
}

// forEach loop
myHugeArray.forEach((item) => {
  console.log(item);
});

// for loop with inline decrementing and cached array length
for (let i = myHugeArray.length; i--; ) {
  console.log(myHugeArray[i]);
}
