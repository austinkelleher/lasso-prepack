# lasso-prepack

[prepack](https://github.com/facebook/prepack) transform for
[Lasso.js](https://github.com/lasso-js/lasso)

## Installation

```bash
npm install lasso-prepack --save
```

## Usage

```js
const lassoPrepack = require('lasso-prepack');

require('lasso').configure({
  ...
  plugins: [
    lassoPrepack
  ]
});
```

