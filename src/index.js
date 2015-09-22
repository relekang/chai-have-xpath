export default function haveXpath (Chai) {
  Chai.Assertion.addMethod('xpath', function (xpath) {
    this.assert(
      haveComponentWithXpath(this._obj, xpath),
      'Expected element to have xpath \'' + xpath + '\'',
      'Expected element to not have xpath \'' + xpath + '\''
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
