interface Person {
  name: string;
}
interface PersonSpan extends Person {
  // 부분집합
  birth: Date;
  death?: Date;
}
