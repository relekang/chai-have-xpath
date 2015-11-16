# chai-have-xpath
> expect(element).to.have.xpath('//blink')

## Installation
```bash
> npm install --save-dev chai-have-xpath
```

## Development
```bash
> npm install
> npm run watch
```

## Usage

```javascript
var chai = require('chai');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var chaiHaveXpath = require('chai-have-xpath');
var expect = chai.expect;
chai.use(chaiHaveXpath);

var component = TestUtils.renderIntoDocument(<h1>hi there o/</h1>);
expect(component).to.have.xpath('//h1[contains(., "hi there o/")]');
```

----------------------

MIT © Rolf Erik Lekang
