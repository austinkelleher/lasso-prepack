'use strict';

const chai = require('chai');
chai.config.includeStack = true;

require('chai').should();

const expect = require('chai').expect;
const lasso = require('lasso');
const fs = require('fs');
const path = require('path');
const lassoPrepack = require('../');

describe('lasso-prepack', function() {
  it('should compile a simple file', (done) => {
    const myLasso = lasso.create({
      fileWriter: {
        fingerprintsEnabled: false,
        outputDir: path.join(__dirname, 'static')
      },
      bundlingEnabled: true,
      plugins:[{
        plugin: lassoPrepack,
        config: {}
      }]
    });

    myLasso.lassoPage({
      name: 'testPage',
      dependencies: [
        path.join(__dirname, 'fixtures/simple.js')
      ]
    }, (err, lassoPageResult) => {
      if (err) {
        return done(err);
      }

      const output = fs.readFileSync(path.join(__dirname, 'static/testPage.js'), {
        encoding: 'utf8'
      });

      expect(output).to.not.contain('(function () {');
      done();
    });
  });
});
