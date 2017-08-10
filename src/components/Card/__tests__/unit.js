import { parseStat } from 'components/Card/Content';


describe('parseStat', () => {
  it('should split a string by the first occurence of |', () => {
    const stat = '99 | bottles of beer on the wall';
    const expected = { number: '99', noun: 'bottles of beer on the wall' };
    expect(parseStat(stat)).to.deep.equal(expected);
  });

  it('should split a string by only the first occurence |', () => {
    const stat = '98 | bottles of beer on the |wall|';
    const expected = { number: '98', noun: 'bottles of beer on the |wall|' };
    expect(parseStat(stat)).to.deep.equal(expected);
  });

  it('should trim whitespace around the stat and noun', () => {
    const stat = '   97    |    bottles of beer on the wall   ';
    const expected = { number: '97', noun: 'bottles of beer on the wall' };
    expect(parseStat(stat)).to.deep.equal(expected);
  });

  it('should split on first occurence of whitespace if no delimiter is passed', () => {
    const stat = '96 bottles of beer on the wall   ';
    const expected = { number: '96', noun: 'bottles of beer on the wall' };
    expect(parseStat(stat)).to.deep.equal(expected);
  });

  it('should optionally accept a delimiter', () => {
    const stat = '95 ~ bottles of beer on the wall';
    const expected = { number: '95', noun: 'bottles of beer on the wall' };
    expect(parseStat(stat, '~')).to.deep.equal(expected);
  });
});
