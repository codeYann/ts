function Merge({ a, b }: { a: number[]; b: number[] }): number[] {
  let [i, j] = [0, 0];

  let max: number[] = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      max.push(a[i]);
      i += 1;
    } else {
      max.push(b[j]);
      j += 1;
    }
  }

  while (i < a.length) {
    max.push(a[i]);
    i += 1;
  }

  while (j < b.length) {
    max.push(b[j]);
    j += 1;
  }

  return max;
}

const MergeSort = (list: number[]): number[] =>
  list.length < 2
    ? list
    : Merge({
        a: list.slice(0, Math.ceil(list.length / 2)),
        b: list.slice(-Math.ceil(list.length / 2)),
      });
