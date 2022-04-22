// 단형적 함수의 예
// eslint-disable-next-line @typescript-eslint/naming-convention
export function _findFirst(s: string[], key: string): number {
  function loop(n: number): number {
    return n >= s.length ? -1 : s[n] === key ? n : loop(n + 1)
  }

  return loop(0)
}

// 다형적 함수
// 함수 p가 현재 요소 s[n]과 부합한다면, 원하는 요소를 찾은 것이므로 배열 안에서의 해당 색인을 돌려준다.
export function findFirst<T>(s: T[], p: (n: T) => boolean): number {
  function loop(n: number): number {
    return n >= s.length ? -1 : p(s[n]) ? n : loop(n + 1)
  }

  return loop(0)
}
// -> 형식에 대한 추상을 배열과 배열 안의 한 요소를 검색하는 함수에 적용한 결과이다
