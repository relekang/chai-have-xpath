/* eslint-env mocha */
import React from 'react/addons';

const {TestUtils} = React.addons;
const {expect} = chai;

describe('React components', () => {
  it('should find valid xpath in react component', () => {
    const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
    expect(component).to.have.xpath('//blink')
  });

  it('should throw if it does not find valid xpath in react component', () => {
    const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
    expect(() => {
      expect(component).to.have.xpath('//h1')
    }).to.throw('Expected element to have xpath \'//h1\'');
  });
});
