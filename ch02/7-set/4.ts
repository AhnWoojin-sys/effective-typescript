interface Vector1D {
  x: number;
}

interface Vector2D extends Vector1D {
  y: number;
} // Vector1D 의 서브타입

interface Vector3D extends Vector2D {
  z: number;
} // Vector2D 의 서브타입

// extends  키워드는 ~의 부분집합을 의미하기도 함
