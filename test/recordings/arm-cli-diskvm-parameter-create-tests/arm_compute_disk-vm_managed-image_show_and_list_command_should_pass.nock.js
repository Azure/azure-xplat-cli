// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"osState\": \"Generalized\",\r\n        \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 1,\r\n          \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n          \"caching\": \"None\"\r\n        }\r\n      ]\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/images\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n  \"name\": \"xplattestimg8A\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '775',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'dfb1353e-0a3f-443b-baac-ef80fee58b9b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'c055e20a-eab7-4c9f-875a-37fccfae3d07',
  'x-ms-routing-request-id': 'WESTUS:20170530T051522Z:c055e20a-eab7-4c9f-875a-37fccfae3d07',
  date: 'Tue, 30 May 2017 05:15:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"osState\": \"Generalized\",\r\n        \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 1,\r\n          \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n          \"caching\": \"None\"\r\n        }\r\n      ]\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/images\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n  \"name\": \"xplattestimg8A\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '775',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'dfb1353e-0a3f-443b-baac-ef80fee58b9b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'c055e20a-eab7-4c9f-875a-37fccfae3d07',
  'x-ms-routing-request-id': 'WESTUS:20170530T051522Z:c055e20a-eab7-4c9f-875a-37fccfae3d07',
  date: 'Tue, 30 May 2017 05:15:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/images?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"properties\": {\r\n        \"storageProfile\": {\r\n          \"osDisk\": {\r\n            \"osType\": \"Linux\",\r\n            \"osState\": \"Generalized\",\r\n            \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n            \"caching\": \"None\"\r\n          },\r\n          \"dataDisks\": [\r\n            {\r\n              \"lun\": 1,\r\n              \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n              \"caching\": \"None\"\r\n            }\r\n          ]\r\n        },\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/images\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTSTPVMGCREATE8904/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n      \"name\": \"xplattestimg8A\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '896',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '20093651-0a7a-4683-85e5-53cccd24c513',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '4185a0a0-57be-4433-9b79-6922f3337b32',
  'x-ms-routing-request-id': 'WESTUS:20170530T051524Z:4185a0a0-57be-4433-9b79-6922f3337b32',
  date: 'Tue, 30 May 2017 05:15:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/images?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"properties\": {\r\n        \"storageProfile\": {\r\n          \"osDisk\": {\r\n            \"osType\": \"Linux\",\r\n            \"osState\": \"Generalized\",\r\n            \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n            \"caching\": \"None\"\r\n          },\r\n          \"dataDisks\": [\r\n            {\r\n              \"lun\": 1,\r\n              \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n              \"caching\": \"None\"\r\n            }\r\n          ]\r\n        },\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/images\",\r\n      \"location\": \"southeastasia\",\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/XPLATTSTPVMGCREATE8904/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n      \"name\": \"xplattestimg8A\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '896',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '20093651-0a7a-4683-85e5-53cccd24c513',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '4185a0a0-57be-4433-9b79-6922f3337b32',
  'x-ms-routing-request-id': 'WESTUS:20170530T051524Z:4185a0a0-57be-4433-9b79-6922f3337b32',
  date: 'Tue, 30 May 2017 05:15:23 GMT',
  connection: 'close' });
 return result; }]];