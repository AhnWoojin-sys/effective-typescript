// keyof 를 집합 관점에서 보면 제네릭에 들어가도 쉽게 이해할 수 있음?

interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point; // type 은 'x' | 'y'

const a: PointKeys = "x";

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  vals.sort();
  //...
  return vals;
}

const pts: Point[] = [
  { x: 1, y: 2 },
  { x: 2, y: 2 },
];

sortBy(pts, "x");
sortBy(pts, "y");
sortBy(pts, "z"); //error
