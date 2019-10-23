var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
global.fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });