export namespace AbstractFactoryDesignPattern {

	export interface AbstractFactory {
		createProductA(): AbstractProductA;
		createProductB(): AbstractProductB;
	}
	export interface AbstractProductA {
		usefulFunctionA(): string;
	}
	export interface AbstractProductB {
		usefulFunctionB(): string;
		anoutherUsefulFunctionB(collaborator: AbstractProductA): string;
	}

	export class ConcreateProductA1 implements AbstractProductA {
		usefulFunctionA(): string {
			return `The result of the product A1`;
		}
	}
	export class ConcreateProductA2 implements AbstractProductA {
		usefulFunctionA(): string {
			return `The result of the product A2`;
		}
	}

	export class ConcreateProductB1 implements AbstractProductB {
		usefulFunctionB(): string {
			return 'The result of the product B1.';
		}
		anoutherUsefulFunctionB(collaborator: AbstractProductA): string {
			const result = collaborator.usefulFunctionA();
			return `The result of the B1 collaborating with the (${result})`;
		}
	}

	export class ConcreateProductB2 implements AbstractProductB {
		usefulFunctionB(): string {
			return 'The result of the product B2.';
		}
		anoutherUsefulFunctionB(collaborator: AbstractProductA): string {
			const result = collaborator.usefulFunctionA();
			return `The result of the B2 collaborating with the (${result})`;
		}
	}

	export class ConcreateFactory1 implements AbstractFactory {
		createProductA(): AbstractProductA {
			return new ConcreateProductA1();
		}
		createProductB(): AbstractProductB {
			return new ConcreateProductB1();
		}
	}

	export class ConcreateFactory2 implements AbstractFactory {
		createProductA(): AbstractProductA {
			return new ConcreateProductA2();
		}
		createProductB(): AbstractProductB {
			return new ConcreateProductB2();
		}
	}

	export function ClientCodeFactory(factory: AbstractFactory) {
		const productA = factory.createProductA();
		const productB = factory.createProductB();

		console.log(productB.usefulFunctionB())
		console.log(productB.anoutherUsefulFunctionB(productA))
	}
	export function demo() {
		console.log('Client: Testing client code with the first factory type...');
		ClientCodeFactory(new ConcreateFactory1())

		console.log('Client: Testing the same client code with the second factory type...');
		ClientCodeFactory(new ConcreateFactory2())
	}
}
