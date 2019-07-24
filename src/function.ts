function addFn(x: number, y?: number) {
  return y?  x + y: x
}

function addFn1(x: number, y = 0, z: number) {
  return x + y + z
}
addFn1(1, undefined, 2);

function addFn2(x: number, y = 1, ...rest: number[]) {
  return x + y + rest.reduce((pre, cur) => pre + cur)
}
console.log(1,2,3,4,5,6);

function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
  let first = rest[0];
  if (typeof first === 'number') {
      return rest.reduce((pre, cur) => pre + cur);
  }
  if (typeof first === 'string') {
      return rest.join('');
  }
}
