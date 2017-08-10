require('babel-polyfill');
require('babel-register')();

const { jsdom } = require('jsdom');

const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const {
  expect
} = chai;

global.expect = expect;
global.sinon = sinon;
global.document = jsdom('');
