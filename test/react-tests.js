/* eslint-env mocha */
import React, {Component} from 'react/addons';

const {TestUtils} = React.addons;
const {expect} = chai;

class ClassBased extends Component { // eslint-disable-line react/prefer-stateless-function
  render() { return <div className='class-based'>{this.props.children}</div>; }
}
ClassBased.propTypes = { children: React.PropTypes.any };

describe('React components', () => {
  it('should find valid xpath in react component', () => {
    const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
    expect(component).to.have.xpath('//blink')
  });

  it('should find valid xpath in react class based component', () => {
    const component = TestUtils.renderIntoDocument(<ClassBased><blink>hi</blink></ClassBased>);
    expect(component).to.have.xpath('//blink')
  });

  describe("when it does not find valid xpath in react component", () => {
    it('should throw', () => {
      const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
      expect(() => {
        expect(component).to.have.xpath('//h1')
      }).to.throw('to have xpath \'//h1\'');
    });

    it('should throw with outerHTML of the component', () => {
      const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
      expect(() => {
        expect(component).to.have.xpath('//h1')
      }).to.throw('<blink data-reactid=".3">hi</blink>');
    });
  })
});
