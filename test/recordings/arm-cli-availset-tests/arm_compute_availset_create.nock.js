// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31874',
  'x-ms-request-id': '219be263-6ed2-4a66-957a-20b8e155358d',
  'x-ms-correlation-request-id': '219be263-6ed2-4a66-957a-20b8e155358d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T124933Z:219be263-6ed2-4a66-957a-20b8e155358d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:49:33 GMT',
  connection: 'close',
  'content-length': '113' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31874',
  'x-ms-request-id': '219be263-6ed2-4a66-957a-20b8e155358d',
  'x-ms-correlation-request-id': '219be263-6ed2-4a66-957a-20b8e155358d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T124933Z:219be263-6ed2-4a66-957a-20b8e155358d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:49:33 GMT',
  connection: 'close',
  'content-length': '113' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate\",\"name\":\"xplatTestGAvailCreate\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1149',
  'x-ms-request-id': '28fcc870-141d-45be-9f53-b1b38aacf215',
  'x-ms-correlation-request-id': '28fcc870-141d-45be-9f53-b1b38aacf215',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T124937Z:28fcc870-141d-45be-9f53-b1b38aacf215',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:49:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate\",\"name\":\"xplatTestGAvailCreate\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1149',
  'x-ms-request-id': '28fcc870-141d-45be-9f53-b1b38aacf215',
  'x-ms-correlation-request-id': '28fcc870-141d-45be-9f53-b1b38aacf215',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T124937Z:28fcc870-141d-45be-9f53-b1b38aacf215',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:49:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'fca10c63-a64d-45f1-a5c3-1c8c5c74e98d',
  'x-ms-correlation-request-id': 'fca10c63-a64d-45f1-a5c3-1c8c5c74e98d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T124938Z:fca10c63-a64d-45f1-a5c3-1c8c5c74e98d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:49:38 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'fca10c63-a64d-45f1-a5c3-1c8c5c74e98d',
  'x-ms-correlation-request-id': 'fca10c63-a64d-45f1-a5c3-1c8c5c74e98d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T124938Z:fca10c63-a64d-45f1-a5c3-1c8c5c74e98d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 12:49:38 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail\",\r\n  \"name\": \"xplatTestaAvail\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bee007b0-9d1f-4212-a037-89898ea298d2',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1148',
  'x-ms-correlation-request-id': '0e8887af-a602-4fb5-9fd4-bbec01c8ddb2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T124945Z:0e8887af-a602-4fb5-9fd4-bbec01c8ddb2',
  date: 'Wed, 22 Apr 2015 12:49:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail\",\r\n  \"name\": \"xplatTestaAvail\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bee007b0-9d1f-4212-a037-89898ea298d2',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1148',
  'x-ms-correlation-request-id': '0e8887af-a602-4fb5-9fd4-bbec01c8ddb2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T124945Z:0e8887af-a602-4fb5-9fd4-bbec01c8ddb2',
  date: 'Wed, 22 Apr 2015 12:49:44 GMT',
  connection: 'close' });
 return result; }]];
