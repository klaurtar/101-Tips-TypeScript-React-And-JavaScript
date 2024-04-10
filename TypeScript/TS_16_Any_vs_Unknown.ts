// unknown is a type safe version of any, use it instead!
// unknown must be narrowed down by it's type before being used

// 2 ways to narrow down unknown's type
// 1️⃣ Type guards
function foo(bar: unknown) {
  // error: bar is of type 'unknown'
  bar.split('');

  // ✅
  if (typeof bar === string) {
    bar.split('');
  }
}

// 2️⃣ Equality test
function foo(bar: unknown) {
  // error: bar is of type 'unknown'
  bar * 10;

  // ✅
  if (bar === 16) {
    bar * 10;
  }
}

// 3️⃣ Type Assertion
function foo(bar: unknown) {
  // error: bar is of type 'unknown'
  bar.toFixed(3);

  // ✅
  (bar as number).toFixed(3);
}
