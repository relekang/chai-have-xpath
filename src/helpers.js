
export function getFirstOrderedNodeType() {
  if (XPathResult) {
    return XPathResult.FIRST_ORDERED_NODE_TYPE;
  }

  if (window && window.XPathResult) {
    return window.XPathResult.FIRST_ORDERED_NODE_TYPE;
  }

  throw new Error('XPathResult is not available');
}

export function findSingleNode(expression, parentNode) {
   return document.evaluate(
    expression,
    parentNode,
    null,
    getFirstOrderedNodeType(),
    null
  ).singleNodeValue;
}
