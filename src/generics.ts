//generics function

function logData<T, U>(data1: T, data2: U): T | U {
  return Date.now() % 2 ? data1 : data2;
}
console.log(logData<string, number>("haha", 1));
console.log(logData<number, boolean>(199, true));

//generics interface
interface IPersonality<T> {
  name: string;
  age: number;
  info: T;
}

type job = {
  title: string;
  position: string;
};

let bob: IPersonality<job> = {
  name: "bob",
  age: 2,
  info: {
    title: "mr",
    position: "dev",
  },
};

//generic class
class Dress<T> {
  constructor(public color: string, public size: number, public detail: T) {}
}

const skirt = new Dress<boolean>("red", 4, false);
