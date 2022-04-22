// 2.2
export function isSorted<T>(a: T[], ordered: (x: T, y: T) => boolean): boolean {
  const loop = (n: number): boolean => {
    return n >= a.length ? true : ordered(a[n], a[n - 1]) ? loop(n + 1) : false
  }

  return loop(1)
}
