interface List {
  id: number,
  name: string,
  // [x: string]: any
  sex?: string
}
interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id + value.name)
  })
}

let result = {
  data: [
    {id: 1, name: 'A'},
    {id: 2, name: "B", sex: "male"}
  ]
}
// render(result)
// render({
//   data: [
//     {id: 1, name: 'A', sex: "male"},
//     {id: 2, name: "B"}
//   ]
// } as Result)

render(result)

interface StringArray {
  [index: number]: string
}

let chars: StringArray = ['A', 'B']

interface Names {
  [x: string]: string,
  // y: number,
  [z: number]: string
}

let addFunA = (x: number, y:number) => x + y
interface AddFunB {
  (x: number, y: number): number
}

let addFunb: AddFunB = (x, y) => x + y

interface Lib {
  (): void,
  version: string,
  doSomeThing(): void
}

// let lib: Lib = (() => {}) as Lib
// lib.version = '1.0.0'
// lib.doSomeThing = () => {}

function GetLib() {
  let lib: Lib = (() => {}) as Lib
  lib.version = '1.0.0'
  lib.doSomeThing = () => {}
}

let lib1 = GetLib()
let lib2 = GetLib()