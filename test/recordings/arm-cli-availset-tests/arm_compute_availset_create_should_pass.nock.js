// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGAvailCreate612?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate612' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-request-id': '602cc82a-e9df-43f9-bb7d-2f250a7f0e31',
  'x-ms-correlation-request-id': '602cc82a-e9df-43f9-bb7d-2f250a7f0e31',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T212527Z:602cc82a-e9df-43f9-bb7d-2f250a7f0e31',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 21:25:26 GMT',
  connection: 'close',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGAvailCreate612?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate612' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-request-id': '602cc82a-e9df-43f9-bb7d-2f250a7f0e31',
  'x-ms-correlation-request-id': '602cc82a-e9df-43f9-bb7d-2f250a7f0e31',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T212527Z:602cc82a-e9df-43f9-bb7d-2f250a7f0e31',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 21:25:26 GMT',
  connection: 'close',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGAvailCreate612?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612\",\"name\":\"xplatTestGAvailCreate612\",\"location\":\"eastus\",\"tags\":{\"arm-cli-availset-tests\":\"2016-08-11T21:25:24.945Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '8f5a9809-f2b0-4fd9-bf19-b0dc05e19530',
  'x-ms-correlation-request-id': '8f5a9809-f2b0-4fd9-bf19-b0dc05e19530',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T212528Z:8f5a9809-f2b0-4fd9-bf19-b0dc05e19530',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 21:25:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGAvailCreate612?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612\",\"name\":\"xplatTestGAvailCreate612\",\"location\":\"eastus\",\"tags\":{\"arm-cli-availset-tests\":\"2016-08-11T21:25:24.945Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '8f5a9809-f2b0-4fd9-bf19-b0dc05e19530',
  'x-ms-correlation-request-id': '8f5a9809-f2b0-4fd9-bf19-b0dc05e19530',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T212528Z:8f5a9809-f2b0-4fd9-bf19-b0dc05e19530',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 21:25:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6646?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Compute/availabilitySets/xplatTestaAvail6646' under resource group 'xplatTestGAvailCreate612' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '19594846-1539-4ff1-9384-5c410d3c11e1',
  'x-ms-correlation-request-id': '19594846-1539-4ff1-9384-5c410d3c11e1',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T212530Z:19594846-1539-4ff1-9384-5c410d3c11e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 21:25:29 GMT',
  connection: 'close',
  'content-length': '182' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6646?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Compute/availabilitySets/xplatTestaAvail6646' under resource group 'xplatTestGAvailCreate612' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '19594846-1539-4ff1-9384-5c410d3c11e1',
  'x-ms-correlation-request-id': '19594846-1539-4ff1-9384-5c410d3c11e1',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T212530Z:19594846-1539-4ff1-9384-5c410d3c11e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 21:25:29 GMT',
  connection: 'close',
  'content-length': '182' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6646?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6646\",\r\n  \"name\": \"xplatTestaAvail6646\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '392',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '9e95d5ff-af9f-470d-8157-a0d301bb8e1e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': '6ad887d4-5f2a-4ff2-9432-b9db347064c7',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T212531Z:6ad887d4-5f2a-4ff2-9432-b9db347064c7',
  date: 'Thu, 11 Aug 2016 21:25:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6646?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6646\",\r\n  \"name\": \"xplatTestaAvail6646\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '392',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '9e95d5ff-af9f-470d-8157-a0d301bb8e1e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': '6ad887d4-5f2a-4ff2-9432-b9db347064c7',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T212531Z:6ad887d4-5f2a-4ff2-9432-b9db347064c7',
  date: 'Thu, 11 Aug 2016 21:25:31 GMT',
  connection: 'close' });
 return result; }]];