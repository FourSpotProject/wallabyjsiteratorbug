export class Minimal {
  public permute = function*(): Iterable<number> {
    for(let i = 0; i < 10; ++i) {
        yield i;
    }
  };
}
