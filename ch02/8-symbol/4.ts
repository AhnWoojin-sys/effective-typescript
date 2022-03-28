class Cylinder {
  radius = 1;
  height = 1;
}

function calculateVolumn(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape; // Cylinder
    shape.radius; // number
  }
}

// class는 타입으로 쓰일때는 형태가(속성, 메서드) 사용됨. 값으로 쓰이면 생성자가 사용됨
