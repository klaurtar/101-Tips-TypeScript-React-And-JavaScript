// function generics
const determineIdentity = <T,>(user: T) => {
  console.log(`${user} identity is 1234`);
};

function determineExhangeRate<T>(currency: T) {
  console.log(`${currency} is worth 1000 space credits`);
}

// interface/type generics
interface DataResponse<T> {
  data: T;
  status: string;
}

type ResponsePayload<T> = {
  data: T;
  status: string;
};

// class generics, using extends to narrow type of
class GenericClass<T> {
  log(x: T) {
    console.log(`Your type is ${typeof x}`);
  }
}

// function generic with default assignment. If no type argument is provided, it defaults to string!
function myGenericDefaultFunction<T = string>(word: T) {
  console.log(`Hello ${word}`);
}

// function generic with type narrowing. T must satisfy the number type!
function mathStuff<T extends number>(num: T) {
  return num + 8;
}

// function generic with type narrowing and default assignment
function logName<T extends { name: string } = { name: string }>(obj: T): void {
  console.log(`Logging: ${obj.name}`);
}

// function with multiple generics
function multipleGenerics<T, K>(firstArg: T, secondArg: K) {
  console.log(`${firstArg} ${secondArg}`);
}
