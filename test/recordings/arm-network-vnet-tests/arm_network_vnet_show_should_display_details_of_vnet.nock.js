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
    state: 'Enabled',
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"1e3bfc74-c632-4772-b695-e80f425e81d9\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7ddfae63-d11c-44dc-be9e-4dd08282deda\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\",\r\n        \"8.8.4.4\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '719',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1e3bfc74-c632-4772-b695-e80f425e81d9"',
  'x-ms-request-id': '2bb292f5-b7f7-424d-800c-1168be0b4970',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14908',
  'x-ms-correlation-request-id': 'e9fa57ab-b62c-4638-8764-e03cfdce2754',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110147Z:e9fa57ab-b62c-4638-8764-e03cfdce2754',
  date: 'Tue, 29 Dec 2015 11:01:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n  \"etag\": \"W/\\\"1e3bfc74-c632-4772-b695-e80f425e81d9\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7ddfae63-d11c-44dc-be9e-4dd08282deda\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\",\r\n        \"8.8.4.4\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '719',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1e3bfc74-c632-4772-b695-e80f425e81d9"',
  'x-ms-request-id': '2bb292f5-b7f7-424d-800c-1168be0b4970',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14908',
  'x-ms-correlation-request-id': 'e9fa57ab-b62c-4638-8764-e03cfdce2754',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T110147Z:e9fa57ab-b62c-4638-8764-e03cfdce2754',
  date: 'Tue, 29 Dec 2015 11:01:46 GMT',
  connection: 'close' });
 return result; }]];