// Single pattern
class Singleton {
  private static instance: Singleton;
  private static someVaribleA: number;
  private static someVaribleB: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
      this.someVaribleA = 3;
      this.someVaribleB = 4;
    }

    return this.instance;
  }

  public businessLogicA() {
    // Example...
    return Singleton.someVaribleA * 3;
  }

  public businessLogicB() {
    // Example...
    return Singleton.someVaribleB - 3;
  }
}

/**
 * The client code.
 */
function clientRunner() {
  const singletonOne = Singleton.getInstance();
  const singletonTwo = Singleton.getInstance();

  if (singletonOne === singletonTwo) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

clientRunner();
