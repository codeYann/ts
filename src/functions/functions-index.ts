/**
 * Functions can be a type as well.
 */
export function greeter(f: (a: string) => void, s: string): void {
  f(s);
};

export function calling(message: string): void {
  let str = message
  .split('')
  .map(letters => letters.toUpperCase())
  .forEach(letters => console.log(letters));
} 
