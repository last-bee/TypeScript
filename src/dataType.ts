// 原始类型
let b: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
// 数组
let arr1 : number[] = [1, 2, 3]
let arr2 : Array<number> = [1, 2, 3]
let arr3 : Array<number | string> = [1 ,2, '3']
// 元祖
let tuple: [number, string] = [1, '2']

// 函数
let add = (x: number, y: number) => x + y

// undefined
let un: undefined = undefined
let nu: null = null
num = un
num = null
// void
let noReturn = () => {}

// any
let x
x = 1
x = 'a'
x = () => {}