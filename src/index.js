/* eslint-env browser */
export default function haveXpath (Chai) {
  Chai.Assertion.addMethod('xpath', function (xpath) {
    const dom = this._obj.getDOMNode().outerHTML;
    this.assert(
      haveComponentWithXpath(this._obj, xpath),
      'Expected "' + dom + '" to have xpath \'' + xpath + '\'',
      'Expected "' + dom + '" to not have xpath \'' + xpath + '\''
    );
  });
};

function haveComponentWithXpath (component, expression) {
  const domNode = component.getDOMNode ? component.getDOMNode() : component;
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
