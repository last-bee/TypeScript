// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}

// console.log(Role.Reporter)
// console.log(Role)

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
enum Char {
  // const member
  a,
  b = Char.a,
  c = 1 + 2,
  // computed member
  d = Math.random(),
  e = '123'.length,
  f = 4
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
  Apr = Month.Mar + 1,
  // May = () => 5
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'a' ,b = 'b' }

let e: E = 3
let f: F = 3

// e === f  error

let e1: F.a = 1
let e2: F.b = 3
let e3: F.a = 3
// 不同的枚举类型不能比较
// e1 === e3
// e1 === e2