/** 
 * We can use interface to define an object type
 * 
 */

export interface Person {
  height: number,
  age: number,
  name: string,
}

export function createPerson(height: number, age: number, name: string): Person {
  return {
    height,
    age,
    name
  };
}

export function greetingPerson(person: Person) {
  console.log(`What up dude. You're ${person.name}, ${person.age}, ${person.height}`);
}

