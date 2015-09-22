# chai-have-xpath
> expect(element).to.have.xpath('//blink')

## Installation
```
npm install --save-dev chai-have-xpath
```

## Usage

```javascript
var chai = require('chai');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var chaiHaveXpath = require('chai-have-xpath');

chai.use(chaiHaveXpath);
var expect = chai.expect;

var component = TestUtils.renderIntoDocument(<h1>hi there o/</h1>);

expect(component).to.have.xpath('//h1[contains(., "hi there o/")]');
```

----------------------

MIT © Rolf Erik Lekang
