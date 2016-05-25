/* eslint-env browser */
import { haveXpath, getFindDOMNode } from 'have-xpath';
import pretty from 'pretty';

export default function chaiHaveXpath(Chai) {
  Chai.Assertion.addMethod('xpath', function evaluateXpath(xpath) {
    const findDOMNode = getFindDOMNode();

    const domNode = findDOMNode(this._obj);
    const html = pretty(domNode.outerHTML);

    this.assert(
      haveXpath(this._obj, xpath),
      `Expected \n\n${html}\n\n  to have xpath '${xpath}'`,
      `Expected \n\n${html}\n\n  to not have xpath '${xpath}'`
    );
  });
}
