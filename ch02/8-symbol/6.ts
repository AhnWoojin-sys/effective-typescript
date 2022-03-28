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

type C = InstanceType<typeof Cylinder>; // type is cylinder
