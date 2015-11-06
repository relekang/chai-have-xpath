/* eslint-env mocha, browser */
const {expect} = chai;

xdescribe('DOM nodes', () => {
  it('should find valid xpath in element', () => {
    const element = document.createElement('blink');
    expect(element).to.have.xpath('//blink');
  });
  it('should throw if it does not find valid xpath in element', () => {
    const element = document.createElement('blink');
    expect(() => {
      expect(element).to.have.xpath('//h1');
    }).to.throw('Expected element to have xpath \'//h1\'');
  });
});
