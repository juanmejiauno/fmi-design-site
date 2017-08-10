require('babel-register')();
require('babel-polyfill');

const sinon = require('sinon');
const React = require('react');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');
const setupDom = require('../lib/setup-dom');

chai.use(chaiAsPromised);
chai.use(sinonChai);

const { expect } = chai;

setupDom();

global.expect = expect;
global.sinon = sinon;
global.React = React;

global.navigator = {
  userAgent: 'node.js'
};
