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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/virtualNetworksDefaultName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '7187cefb-2fe5-4293-a5fe-575346730ca6',
  'x-ms-correlation-request-id': '7187cefb-2fe5-4293-a5fe-575346730ca6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123357Z:7187cefb-2fe5-4293-a5fe-575346730ca6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 12:33:56 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/virtualNetworksDefaultName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '7187cefb-2fe5-4293-a5fe-575346730ca6',
  'x-ms-correlation-request-id': '7187cefb-2fe5-4293-a5fe-575346730ca6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123357Z:7187cefb-2fe5-4293-a5fe-575346730ca6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 12:33:56 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"8ec8de64-abc8-4788-99e9-fa973b2425b9\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"6feddc25-1176-4c06-94ce-ee5cbd1a48f2\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '608',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'f8516da9-b646-42cc-8ff6-c96268ce068d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/f8516da9-b646-42cc-8ff6-c96268ce068d?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'dea11d3e-2714-4ac6-8dfd-52d979b9b779',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123400Z:dea11d3e-2714-4ac6-8dfd-52d979b9b779',
  date: 'Fri, 07 Jul 2017 12:34:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"8ec8de64-abc8-4788-99e9-fa973b2425b9\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"6feddc25-1176-4c06-94ce-ee5cbd1a48f2\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '608',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'f8516da9-b646-42cc-8ff6-c96268ce068d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/f8516da9-b646-42cc-8ff6-c96268ce068d?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'dea11d3e-2714-4ac6-8dfd-52d979b9b779',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123400Z:dea11d3e-2714-4ac6-8dfd-52d979b9b779',
  date: 'Fri, 07 Jul 2017 12:34:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/f8516da9-b646-42cc-8ff6-c96268ce068d?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2baf5193-8024-4fd7-94ab-b253e452ab41',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2bc036b5-75ff-4a6b-ac32-744880e759c0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123432Z:2bc036b5-75ff-4a6b-ac32-744880e759c0',
  date: 'Fri, 07 Jul 2017 12:34:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/f8516da9-b646-42cc-8ff6-c96268ce068d?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2baf5193-8024-4fd7-94ab-b253e452ab41',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2bc036b5-75ff-4a6b-ac32-744880e759c0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123432Z:2bc036b5-75ff-4a6b-ac32-744880e759c0',
  date: 'Fri, 07 Jul 2017 12:34:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"5cfb1ae1-3ce5-4cb2-890d-3dee49ec1385\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6feddc25-1176-4c06-94ce-ee5cbd1a48f2\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '609',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5cfb1ae1-3ce5-4cb2-890d-3dee49ec1385"',
  'x-ms-request-id': 'b7a30ce9-c01f-479f-8cf5-4c831ed7613c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '9cd7c3f4-b835-406b-8241-ee1fc3fdc966',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123433Z:9cd7c3f4-b835-406b-8241-ee1fc3fdc966',
  date: 'Fri, 07 Jul 2017 12:34:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"5cfb1ae1-3ce5-4cb2-890d-3dee49ec1385\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6feddc25-1176-4c06-94ce-ee5cbd1a48f2\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '609',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5cfb1ae1-3ce5-4cb2-890d-3dee49ec1385"',
  'x-ms-request-id': 'b7a30ce9-c01f-479f-8cf5-4c831ed7613c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '9cd7c3f4-b835-406b-8241-ee1fc3fdc966',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123433Z:9cd7c3f4-b835-406b-8241-ee1fc3fdc966',
  date: 'Fri, 07 Jul 2017 12:34:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"5cfb1ae1-3ce5-4cb2-890d-3dee49ec1385\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6feddc25-1176-4c06-94ce-ee5cbd1a48f2\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '609',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5cfb1ae1-3ce5-4cb2-890d-3dee49ec1385"',
  'x-ms-request-id': '0837e9f8-7bdc-40d1-bca1-287829777a43',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'c0b9220c-b44a-45d7-a37c-4076be7a1b4a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123435Z:c0b9220c-b44a-45d7-a37c-4076be7a1b4a',
  date: 'Fri, 07 Jul 2017 12:34:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"5cfb1ae1-3ce5-4cb2-890d-3dee49ec1385\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6feddc25-1176-4c06-94ce-ee5cbd1a48f2\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '609',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5cfb1ae1-3ce5-4cb2-890d-3dee49ec1385"',
  'x-ms-request-id': '0837e9f8-7bdc-40d1-bca1-287829777a43',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'c0b9220c-b44a-45d7-a37c-4076be7a1b4a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123435Z:c0b9220c-b44a-45d7-a37c-4076be7a1b4a',
  date: 'Fri, 07 Jul 2017 12:34:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/2583e4a9-dd54-43e4-ad85-94aaaa1dbd62?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '2583e4a9-dd54-43e4-ad85-94aaaa1dbd62',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/2583e4a9-dd54-43e4-ad85-94aaaa1dbd62?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4d522bce-a569-4ffb-b302-80196c9a4288',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123437Z:4d522bce-a569-4ffb-b302-80196c9a4288',
  date: 'Fri, 07 Jul 2017 12:34:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2017-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/2583e4a9-dd54-43e4-ad85-94aaaa1dbd62?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '2583e4a9-dd54-43e4-ad85-94aaaa1dbd62',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/2583e4a9-dd54-43e4-ad85-94aaaa1dbd62?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4d522bce-a569-4ffb-b302-80196c9a4288',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123437Z:4d522bce-a569-4ffb-b302-80196c9a4288',
  date: 'Fri, 07 Jul 2017 12:34:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/2583e4a9-dd54-43e4-ad85-94aaaa1dbd62?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '23d79377-60e2-49c7-b009-34e8de5dbd52',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '5b99214f-de19-4051-baeb-3b2c9bd62de5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123508Z:5b99214f-de19-4051-baeb-3b2c9bd62de5',
  date: 'Fri, 07 Jul 2017 12:35:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/2583e4a9-dd54-43e4-ad85-94aaaa1dbd62?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '23d79377-60e2-49c7-b009-34e8de5dbd52',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '5b99214f-de19-4051-baeb-3b2c9bd62de5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T123508Z:5b99214f-de19-4051-baeb-3b2c9bd62de5',
  date: 'Fri, 07 Jul 2017 12:35:08 GMT',
  connection: 'close' });
 return result; }]];