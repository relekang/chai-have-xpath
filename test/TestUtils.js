function getTestUtils() {
  try {
    // Require the TestUtils Package (0.14.x)
    return require('react-addons-test-utils');
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }
    // If the addons are present (0.13.x), export the addon-version of TestUtils
    return require('react/addons').addons.TestUtils;
  }
}

export default getTestUtils();
