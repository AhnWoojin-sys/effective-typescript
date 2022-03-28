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
