// 리턴값이 "B => C" 이다. 즉 C를 리턴하는 B를 인자로 받는 함수를 리턴
export function partial<A, B, C>(a: A, f: (a: A, b: B) => C): (b: B) => C {
  return (b: B) => f(a, b)
}
