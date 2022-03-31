/**
 * Functions can be a type as well.
 */

// using type alias to create type for callback
type greeterCallBack = (a: string) => string[];

export function greeter(f: greeterCallBack, s: string): void {
  f(s);
}

export function calling(message: string): string[] {
  let str = message
    .split('')
    .map((letters) => letters.toUpperCase());
  str.forEach((letters) => console.log(letters));
  return str;
}

