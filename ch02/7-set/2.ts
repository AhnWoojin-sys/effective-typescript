// item7 타입이의 값들의 집합이라고 생각하기
type A = "A";
type B = "B";
type Twelve = 12;

type AB = "A" | "B"; // A or B
type AB12 = "A" | "B" | 12; // A or B or 12

const a: AB = "A";
// const c: AB = "C"; // Error 타입 "C"가 할당되지 않았음

interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: "Alan turing",
  birth: new Date(),
  death: new Date(),
};

type K = keyof (Person | Lifespan); // K는 Never 타입 (교차점이 없음)
