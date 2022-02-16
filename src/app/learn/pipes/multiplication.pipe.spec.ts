import { MultiplicatePipe } from './multiplication.pipe';

describe('MultiplicatePipe', () => {
  it('create an instance', () => {
    const pipe = new MultiplicatePipe();
    expect(pipe).toBeTruthy();
  });
});
