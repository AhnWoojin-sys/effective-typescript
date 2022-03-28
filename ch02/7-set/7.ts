// Array tuple의 관계

const list = [1, 2]; // number[]
const tuple: [number, number] = list; // error?; 0, 1

const triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple;
