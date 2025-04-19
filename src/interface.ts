interface IPerson {
  name: string;
  age: number;
}

interface IPerson {
  speak(): void;
}

interface IStudent extends IPerson {
  grade: string;
}

const student: IStudent = {
  name: "bob",
  age: 5,
  speak() {
    console.log(`${this.name}`);
  },
  grade: "2",
};
