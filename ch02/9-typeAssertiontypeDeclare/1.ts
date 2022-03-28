interface Person {
  name: string;
}

const alice: Person = { name: "Alice" }; // type is Person (type declaration)
const bob = { name: "Bob" } as Person; // type is Person (type Assertion)

const alice2: Person = {}; // error
const bob2 = {} as Person; // no error

const alice3: Person = { name: "Alice", occupation: "developer" }; // error
const bob2 = { name: "bob", occupation: "developer" } as Person; // no error
