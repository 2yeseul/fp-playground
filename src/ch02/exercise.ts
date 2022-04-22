// 2.2
export function isSorted<T>(a: T[], ordered: (x: T, y: T) => boolean): boolean {
  const loop = (n: number): boolean => {
    return n >= a.length ? true : ordered(a[n], a[n - 1]) ? loop(n + 1) : false
  }

  return loop(1)
}

// 2.3
export function curry<A, B, C>(f: (a: A, b: B) => C): (a: A) => (b: B) => C {
  return (a: A) => (b: B) => f(a, b)
}

// 2.4
export function uncurry<A, B, C>(f: (a: A) => (b: B) => C): (a: A, b: B) => C {
  return (a: A, b: B) => f(a)(b)
}

// 2.5
export function compose<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C {
  return (a: A) => f(g(a))
}
