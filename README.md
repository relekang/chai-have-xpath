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
const chai = require('chai');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const chaiHaveXpath = require('chai-have-xpath');
const { expect } = chai;
chai.use(chaiHaveXpath);

let component = TestUtils.renderIntoDocument(<h1>hi there o/</h1>);
expect(component).to.have.xpath('//h1[contains(., "hi there o/")]');
```

----------------------

MIT © Rolf Erik Lekang
