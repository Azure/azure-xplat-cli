// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e05dbbce-79c2-45a2-a7ef-f1058856feb3',
    name: 'RNMTEST5',
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
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/changeDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '8b508696-57e4-4e19-b015-ebb9ab3ead65',
  'x-ms-correlation-request-id': '8b508696-57e4-4e19-b015-ebb9ab3ead65',
  'x-ms-routing-request-id': 'WESTUS:20170919T183811Z:8b508696-57e4-4e19-b015-ebb9ab3ead65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 19 Sep 2017 18:38:11 GMT',
  connection: 'close',
  'content-length': '173' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/changeDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '8b508696-57e4-4e19-b015-ebb9ab3ead65',
  'x-ms-correlation-request-id': '8b508696-57e4-4e19-b015-ebb9ab3ead65',
  'x-ms-routing-request-id': 'WESTUS:20170919T183811Z:8b508696-57e4-4e19-b015-ebb9ab3ead65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 19 Sep 2017 18:38:11 GMT',
  connection: 'close',
  'content-length': '173' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"e8540792-8c68-4e6f-a40b-738e4f398544\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '666',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '9d469554-fc06-41a0-8862-86a5f4a666a2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/9d469554-fc06-41a0-8862-86a5f4a666a2?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '279f94c0-68a4-4be8-9c83-f5cf35bbe07a',
  'x-ms-routing-request-id': 'WESTUS:20170919T183812Z:279f94c0-68a4-4be8-9c83-f5cf35bbe07a',
  date: 'Tue, 19 Sep 2017 18:38:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"e8540792-8c68-4e6f-a40b-738e4f398544\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '666',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '9d469554-fc06-41a0-8862-86a5f4a666a2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/9d469554-fc06-41a0-8862-86a5f4a666a2?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '279f94c0-68a4-4be8-9c83-f5cf35bbe07a',
  'x-ms-routing-request-id': 'WESTUS:20170919T183812Z:279f94c0-68a4-4be8-9c83-f5cf35bbe07a',
  date: 'Tue, 19 Sep 2017 18:38:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/9d469554-fc06-41a0-8862-86a5f4a666a2?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ed4a159b-7b1c-4bbe-81c3-ed759d206d5d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '85fac2fd-c0f1-48cf-9edd-6a30bfc5a7fe',
  'x-ms-routing-request-id': 'WESTUS:20170919T183842Z:85fac2fd-c0f1-48cf-9edd-6a30bfc5a7fe',
  date: 'Tue, 19 Sep 2017 18:38:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/9d469554-fc06-41a0-8862-86a5f4a666a2?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ed4a159b-7b1c-4bbe-81c3-ed759d206d5d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '85fac2fd-c0f1-48cf-9edd-6a30bfc5a7fe',
  'x-ms-routing-request-id': 'WESTUS:20170919T183842Z:85fac2fd-c0f1-48cf-9edd-6a30bfc5a7fe',
  date: 'Tue, 19 Sep 2017 18:38:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"bf3b0eee-ba98-416c-808e-a20bb1d7ed5d\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '667',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"bf3b0eee-ba98-416c-808e-a20bb1d7ed5d"',
  'x-ms-request-id': '16de71fa-aa03-4cb8-b9e2-74d35b671e08',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': 'd14d1cc6-2d5d-4214-8a1e-cf9ac7033a53',
  'x-ms-routing-request-id': 'WESTUS:20170919T183842Z:d14d1cc6-2d5d-4214-8a1e-cf9ac7033a53',
  date: 'Tue, 19 Sep 2017 18:38:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"bf3b0eee-ba98-416c-808e-a20bb1d7ed5d\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '667',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"bf3b0eee-ba98-416c-808e-a20bb1d7ed5d"',
  'x-ms-request-id': '16de71fa-aa03-4cb8-b9e2-74d35b671e08',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': 'd14d1cc6-2d5d-4214-8a1e-cf9ac7033a53',
  'x-ms-routing-request-id': 'WESTUS:20170919T183842Z:d14d1cc6-2d5d-4214-8a1e-cf9ac7033a53',
  date: 'Tue, 19 Sep 2017 18:38:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"bf3b0eee-ba98-416c-808e-a20bb1d7ed5d\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '667',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"bf3b0eee-ba98-416c-808e-a20bb1d7ed5d"',
  'x-ms-request-id': 'fc886b41-6055-4beb-8d50-8b278c1f426d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '8448321f-fbc0-4243-9652-78765493a4b9',
  'x-ms-routing-request-id': 'WESTUS:20170919T183843Z:8448321f-fbc0-4243-9652-78765493a4b9',
  date: 'Tue, 19 Sep 2017 18:38:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"bf3b0eee-ba98-416c-808e-a20bb1d7ed5d\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '667',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"bf3b0eee-ba98-416c-808e-a20bb1d7ed5d"',
  'x-ms-request-id': 'fc886b41-6055-4beb-8d50-8b278c1f426d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '8448321f-fbc0-4243-9652-78765493a4b9',
  'x-ms-routing-request-id': 'WESTUS:20170919T183843Z:8448321f-fbc0-4243-9652-78765493a4b9',
  date: 'Tue, 19 Sep 2017 18:38:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"2e723a48-dcb3-4cf4-aba1-0fb61e9fc746\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '4f32ec33-bfe4-4634-92f5-d21027a4736d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/4f32ec33-bfe4-4634-92f5-d21027a4736d?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'f0d14a35-7f9a-4803-a927-45fd38901e51',
  'x-ms-routing-request-id': 'WESTUS:20170919T183843Z:f0d14a35-7f9a-4803-a927-45fd38901e51',
  date: 'Tue, 19 Sep 2017 18:38:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"2e723a48-dcb3-4cf4-aba1-0fb61e9fc746\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '4f32ec33-bfe4-4634-92f5-d21027a4736d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/4f32ec33-bfe4-4634-92f5-d21027a4736d?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'f0d14a35-7f9a-4803-a927-45fd38901e51',
  'x-ms-routing-request-id': 'WESTUS:20170919T183843Z:f0d14a35-7f9a-4803-a927-45fd38901e51',
  date: 'Tue, 19 Sep 2017 18:38:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/4f32ec33-bfe4-4634-92f5-d21027a4736d?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '053983e7-f318-4184-9729-9b06eb4dbbce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': 'f93ce73f-1446-4839-af8a-366aceb68cc5',
  'x-ms-routing-request-id': 'WESTUS:20170919T183914Z:f93ce73f-1446-4839-af8a-366aceb68cc5',
  date: 'Tue, 19 Sep 2017 18:39:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/4f32ec33-bfe4-4634-92f5-d21027a4736d?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '053983e7-f318-4184-9729-9b06eb4dbbce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': 'f93ce73f-1446-4839-af8a-366aceb68cc5',
  'x-ms-routing-request-id': 'WESTUS:20170919T183914Z:f93ce73f-1446-4839-af8a-366aceb68cc5',
  date: 'Tue, 19 Sep 2017 18:39:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"368c8301-faf2-472e-9456-bde6a8c72129\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"368c8301-faf2-472e-9456-bde6a8c72129"',
  'x-ms-request-id': '482e688a-132b-40d2-911b-8c6e64d6ce23',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '2086077d-af8c-4e67-9cec-e6428e62b07a',
  'x-ms-routing-request-id': 'WESTUS:20170919T183914Z:2086077d-af8c-4e67-9cec-e6428e62b07a',
  date: 'Tue, 19 Sep 2017 18:39:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"368c8301-faf2-472e-9456-bde6a8c72129\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"368c8301-faf2-472e-9456-bde6a8c72129"',
  'x-ms-request-id': '482e688a-132b-40d2-911b-8c6e64d6ce23',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '2086077d-af8c-4e67-9cec-e6428e62b07a',
  'x-ms-routing-request-id': 'WESTUS:20170919T183914Z:2086077d-af8c-4e67-9cec-e6428e62b07a',
  date: 'Tue, 19 Sep 2017 18:39:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"368c8301-faf2-472e-9456-bde6a8c72129\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"368c8301-faf2-472e-9456-bde6a8c72129"',
  'x-ms-request-id': '98ca204e-eec1-4242-b07b-b6150eba400d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'fc82bece-bd07-4c6e-9b69-a96e79852187',
  'x-ms-routing-request-id': 'WESTUS:20170919T183915Z:fc82bece-bd07-4c6e-9b69-a96e79852187',
  date: 'Tue, 19 Sep 2017 18:39:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"368c8301-faf2-472e-9456-bde6a8c72129\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2ecd038-4a2d-4b6e-bc16-e8527f157373\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"368c8301-faf2-472e-9456-bde6a8c72129"',
  'x-ms-request-id': '98ca204e-eec1-4242-b07b-b6150eba400d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'fc82bece-bd07-4c6e-9b69-a96e79852187',
  'x-ms-routing-request-id': 'WESTUS:20170919T183915Z:fc82bece-bd07-4c6e-9b69-a96e79852187',
  date: 'Tue, 19 Sep 2017 18:39:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operationResults/44b3192b-10d0-469e-8cbf-30a1a022f555?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '44b3192b-10d0-469e-8cbf-30a1a022f555',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/44b3192b-10d0-469e-8cbf-30a1a022f555?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '51671902-38a4-46de-bc82-c33396c6802c',
  'x-ms-routing-request-id': 'WESTUS:20170919T183915Z:51671902-38a4-46de-bc82-c33396c6802c',
  date: 'Tue, 19 Sep 2017 18:39:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operationResults/44b3192b-10d0-469e-8cbf-30a1a022f555?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '44b3192b-10d0-469e-8cbf-30a1a022f555',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/44b3192b-10d0-469e-8cbf-30a1a022f555?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '51671902-38a4-46de-bc82-c33396c6802c',
  'x-ms-routing-request-id': 'WESTUS:20170919T183915Z:51671902-38a4-46de-bc82-c33396c6802c',
  date: 'Tue, 19 Sep 2017 18:39:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/44b3192b-10d0-469e-8cbf-30a1a022f555?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0148eb6f-000c-48fe-a71d-9cd8568f1cbd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': 'fd25c65d-53ef-4942-ae81-227f28908b46',
  'x-ms-routing-request-id': 'WESTUS:20170919T183945Z:fd25c65d-53ef-4942-ae81-227f28908b46',
  date: 'Tue, 19 Sep 2017 18:39:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/44b3192b-10d0-469e-8cbf-30a1a022f555?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0148eb6f-000c-48fe-a71d-9cd8568f1cbd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': 'fd25c65d-53ef-4942-ae81-227f28908b46',
  'x-ms-routing-request-id': 'WESTUS:20170919T183945Z:fd25c65d-53ef-4942-ae81-227f28908b46',
  date: 'Tue, 19 Sep 2017 18:39:45 GMT',
  connection: 'close' });
 return result; }]];