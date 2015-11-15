function getReactDomFindDOMNode() {
  try {
    return require('react-dom').findDOMNode;
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }
  }
}

function getReactFindDOMNode() {
  try {
    return require('react').findDOMNode;
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }
  }
}

export function getFindDOMNode() {
  return getReactDomFindDOMNode() || getReactFindDOMNode();
}

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
