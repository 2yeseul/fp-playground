export class Cons<T> {
  private head: T
  private tail: Array<T>

  constructor(head: T, tail: Array<T>) {
    this.head = head
    this.tail = tail
  }

  public getHead(): T {
    return this.head
  }

  public getTail(): Array<T> {
    return this.tail
  }
}
