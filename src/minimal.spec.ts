import { Minimal } from "./minimal";

it('should work', () => {
    const instance = new Minimal();
    const result: number[] = new Array<number>();
    const iterator = instance.permute();
    for (const permutation of iterator) {
        result.push(permutation);
    }
    console.log(result);

    const permutations = [...instance.permute()];
    console.log(permutations);
});
