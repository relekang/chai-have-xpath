/* eslint-env browser */
import { haveXpath, getFindDOMNode } from 'have-xpath';

let findDOMNode = findDOMNode || (global && global.findDOMNode);

export default function chaiHaveXpath(Chai) {
  Chai.Assertion.addMethod('xpath', function evaluateXpath(xpath) {
    findDOMNode = findDOMNode || getFindDOMNode();

    const domNode = findDOMNode(this._obj);

    this.assert(
      haveXpath(this._obj, xpath),
      `Expected "${domNode.outerHTML}" to have xpath '${xpath}'`,
      `Expected "${domNode.outerHTML}" to not have xpath '${xpath}'`
    );
  });
}
