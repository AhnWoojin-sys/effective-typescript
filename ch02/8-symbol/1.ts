//symbol

interface Cylinder {
  redius: number;
  height: number;
}

const Cylinder = (radius: number, height: number) => ({ radius, height });

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape.radius; // radius 속성이 없음 (function 을 참조)
  }
}
