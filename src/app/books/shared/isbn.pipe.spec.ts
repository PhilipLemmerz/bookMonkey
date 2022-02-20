import { IsbnPipe } from './isbn.pipe';

// Unit-Test

// 1. Spezifikation => keine Leerzeichen
// 2. Spezifikation => wir testen das die ISBN richtig umgewandelt wird mit Bindestrichen
// geben wir anstelle von 123-456-789-012  z.B. 12-345-678... ein schlägt der Test fehl

describe('IsbnPipe', ()=> {
  let pipe: IsbnPipe;

  beforeEach(()=>{
    pipe = new IsbnPipe();
  });

  it('shoud habe no whitespaces', () => {
    expect(pipe.transform('')).toBe(null)
  })
  it('should transform Isbn in correct format', () => {
    expect(pipe.transform('1234567890123')).toBe('123-456-789-012-3');
  })
})



