// item 4 . 구조적 타이핑에 익숙해지기
//
interface Vector2D {
  x: number;
  y: number;
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

// bad
function calculateLength1(v: Vector3D) {
  const length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];

    length += Math.abs(coord); // any 인 값을 number 타입 변수에 넣을 수 없음
  }
  return length;
}

// Good
function calculateLength2(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

function normalize(v: Vector3D) {
  const length = calculateLength(v); //x, y 타입이 존재해서 넘기는 듯

  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

console.log(normalize({ x: 3, y: 4, z: 5 }));

const v: NamedVector = { x: 3, y: 4, name: "Zee" };

// done like duck typing
calculateLength(v);
