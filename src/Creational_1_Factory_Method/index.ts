// Design pattern from Guru
export namespace FactoryMethodDesignPattern {
	export interface Product {
		operation(): string
	}

	abstract class Creator {
		abstract factoryMethod(): Product;
		someOperation(): string {
			let product = this.factoryMethod();
			return `Creator: The same creator's code has just worked with ${product.operation()}`
		}

	}

	export class ConcreateCreatorA extends Creator {
		factoryMethod(): Product {
			return new ConcreateProductA()
		}
	}

	export class ConcreateCreatorB extends Creator {
		factoryMethod(): Product {
			return new ConcreateProductB()
		}
	}

	export class ConcreateProductA implements Product {
		operation(): string {
			return "This Come From Concreate Product A"
		}
	}

	export class ConcreateProductB implements Product {
		operation(): string {
			return "This Come From Concreate Product B"
		}
	}

	export function demo() {
		console.log();
		console.log('App: Launched with the ConcreteCreator1.')
		let Creator1 = new ConcreateCreatorA();
		console.log(Creator1.someOperation());
		console.log();
		console.log('App: Launched with the ConcreteCreator2.')
		let Creator2 = new ConcreateCreatorB();
		console.log(Creator2.someOperation());
	}
}
