// enum State {
//   "OPENED",
//   "CLOSED",
// }

abstract class House {
  protected door = false;
  protected tenants: Person[] = [];

  constructor(signature: {}) {
    this.key = signature;
  }

  public comeIn(person: {}): void {
    if (this.door) {
      
    }
    this.tenants.push(person: {});
  }
  public abstract openDoor(): void;
}

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.round(Math.random() * 1000);
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
   constructor(private key: Key) {
  }

  public getKey(): Key {
    return this.key;
  }
}
