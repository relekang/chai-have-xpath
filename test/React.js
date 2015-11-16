function getReact() {
  try {
    // 0.14.x Import
    return require('react');
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }
    // 0.13.x Import
    return require('react/addons');
  }
}

export default getReact();
