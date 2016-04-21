/* eslint-env node, browser */
let React;
export default function haveXpath (Chai) {
  Chai.Assertion.addMethod('xpath', function (xpath) {
    if (!React) {
      React = require('react');
    }

    const domNode = React.findDOMNode(this._obj);

    this.assert(
      haveComponentWithXpath(this._obj, xpath, domNode),
      'Expected "' + domNode.outerHTML + '" to have xpath \'' + xpath + '\'',
      'Expected "' + domNode.outerHTML + '" to not have xpath \'' + xpath + '\''
    );
  });
};

function haveComponentWithXpath (component, expression, domNode) {
  document.body.appendChild(domNode.parentNode);
  const xpathNode = document.evaluate(
    expression,
    domNode.parentNode,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  document.body.removeChild(domNode.parentNode);
  return xpathNode !== null;
}
