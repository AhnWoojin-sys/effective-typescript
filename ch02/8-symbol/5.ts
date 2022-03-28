interface Person {
  first: string;
  last: string;
}

const p: Person = { first: "woo", last: "jin" };
//       ------ type ------------------------ values

async function email(
  p: Person,
  subject: string,
  body: string
): Promise<Response> {
  return fetch("api.dosuemr.com");
}

type T1 = typeof p; // Person
type T2 = typeof email; //(p: Person ....) => resposne

const v1 = typeof p; // object
const v2 = typeof email; // function

console.log(v1, v2);
