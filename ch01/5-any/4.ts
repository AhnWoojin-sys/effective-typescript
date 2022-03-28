// vscode의 유용한 기능들을 사용 할 수 없음.
const person: any = { first: "George", last: "Washington" };
// person. // 자동완성이 안됨

interface Person {
  first: string;
  last: string;
}

const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: Person) => `${p.first} ${p.last}`; // Any
