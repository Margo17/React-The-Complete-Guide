// Primitives: number, string, boolean
// Reference: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

age = 12;

let userName: string;

userName = 'Martynas';

let isDeveloper: boolean;

isDeveloper = true;

// Referece

let hobbies: string[];

hobbies = ['Brazilian Jujitsu', 'Rally', 'Watches', 'Reading'];

type Person = {
	name: string;
	age: number;
};

let person: Person;

person = {
	name: 'Martynas',
	age: 24,
};

let people: Person[];

// Type inference (automatically assign a type) and union type (|)

let job: string | number = 'Front-End Web Developer';

job = 3000;

// Type alias (defined above by using keyword 'type')

// Functions & types

function add(a: number, b: number) {
	return a + b;
}

function printSmth(value: any) {
	console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 2, 3];

const numberArray = insertAtBeginning(demoArray, 0); // [0, 1, 2, 3]
const stringArray = insertAtBeginning(['b', 'c', 'd'], 'a'); // ['a', 'b', 'c', 'd']
