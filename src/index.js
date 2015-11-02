/* eslint-env browser */
let findDOMNode;

export default function haveXpath (Chai) {
  Chai.Assertion.addMethod('xpath', function (xpath) {
    if (typeof findDOMNode === 'undefined') {
      findDOMNode = require('react-dom').findDOMNode;
    }

    const dom = findDOMNode(this._obj).outerHTML;

    this.assert(
      haveComponentWithXpath(this._obj, xpath),
      'Expected "' + dom + '" to have xpath \'' + xpath + '\'',
      'Expected "' + dom + '" to not have xpath \'' + xpath + '\''
    );
  });
};

function haveComponentWithXpath (component, expression) {
  let domNode;

  domNode = findDOMNode(component);

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
