/* eslint-disable @typescript-eslint/no-unused-vars */
// ref: https://overcurried.com/3%EB%B6%84%20%EB%AA%A8%EB%82%98%EB%93%9C/

function id<A>(a: A): A {
  return a
}

// 임의의 튜플 [A, B] 의 각 요소에 함수를 각각 적용하는 함수
function bimap<A, B, C, D>(
  [a, b]: [A, B],
  f: (a: A) => C,
  g: (b: B) => D,
): [C, D] {
  return [f(a), g(b)]
}

// 주어진 튜플에 두번 째 요소에만 함수를 적용하는 함수 - id 함수 없이
function fmap<A, B, C>([a, b]: [A, B], f: (b: B) => C): [A, C] {
  return [a, f(b)]
}

// 주어진 튜플에 두번 째 요소에만 함수를 적용하는 함수 - id 함수와 같이
function fmap2<A, B, C>(pair: [A, B], f: (b: B) => C): [A, C] {
  return bimap(pair, id, f)
}
