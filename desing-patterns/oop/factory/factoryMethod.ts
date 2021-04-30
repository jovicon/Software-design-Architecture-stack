// Base code
abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}

function clientCode(creator: Creator) {
  // ...
  console.log("Client: I'm not aware of the creator's class, but it still works.");
  console.log(creator.someOperation());
  // ...
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());

/**
 *  Uses Cases
 *  Multiple Message App
 */
abstract class MessageConnectorCreator {
  public abstract factoryMethod(): MessageConnector;

  // internal business logic
  public someOperation(): string {
    const anotherMessageService = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${anotherMessageService.send('something')}`;
  }
}

interface MessageConnector {
  status(id: number): string;
  send(message: string): string;
  shortUrl(): number;
}

class TwilioCreator extends MessageConnectorCreator {
  public factoryMethod(): MessageConnector {
    return new TwilioConnector();
  }
}

class SlackCreator extends MessageConnectorCreator {
  public factoryMethod(): MessageConnector {
    return new SlackConnector();
  }
}

class TwilioConnector implements MessageConnector {
  private static keyID: string = 'TwilioKeyId';
  private static secretID: string = 'TwilioSecretId';
  private static token: string;

  private static auth() {
    // make api auth
    this.token = `${this.keyID} - ${this.secretID}`;
  }

  private static request() {
    if (!this.token) this.auth();
    // requests get or post exeution
  }

  public status(id): string {
    return '{Result of the status}';
  }

  public send(message): string {
    return '{Result of send}';
  }

  public shortUrl(): number {
    throw new Error('Method not implemented.');
  }
}

class SlackConnector implements MessageConnector {
  private static keyID: string = 'SlackKeyId';
  private static secretID: string = 'SlackSecretId';
  private static token: string;

  private static auth() {
    // make api auth
    this.token = `${this.secretID} ----- ${this.keyID}`;
  }

  private static request() {
    if (!this.token) this.auth();
    // requests get or post exeution
  }

  public status(id: number): string {
    return '{Result of the ConcreteProduct2}';
  }

  public send(message): string {
    return '{Result of the ConcreteProduct2}';
  }

  public shortUrl(): number {
    throw new Error('Method not implemented.');
  }
}

const twilio = new TwilioConnector();
twilio.send('message');

function MessageService(creator: MessageConnectorCreator) {
  // ...
  console.log("Client: I'm not aware of the creator's class, but it still works.");
  console.log(creator.someOperation());
  // ...
}

console.log('App: Launched with the ConcreteCreator1.');
MessageService(new SlackCreator());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
MessageService(new TwilioCreator());
