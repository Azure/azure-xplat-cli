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
    registeredProviders: ['mobileservice', 'website'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/zeroASNName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/zeroASNName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f53dc5b6-70aa-4836-8ff3-c2d2c6b95a80',
  'x-ms-correlation-request-id': 'f53dc5b6-70aa-4836-8ff3-c2d2c6b95a80',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091143Z:f53dc5b6-70aa-4836-8ff3-c2d2c6b95a80',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Dec 2016 09:11:43 GMT',
  connection: 'close',
  'content-length': '178' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/zeroASNName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/zeroASNName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f53dc5b6-70aa-4836-8ff3-c2d2c6b95a80',
  'x-ms-correlation-request-id': 'f53dc5b6-70aa-4836-8ff3-c2d2c6b95a80',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091143Z:f53dc5b6-70aa-4836-8ff3-c2d2c6b95a80',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Dec 2016 09:11:43 GMT',
  connection: 'close',
  'content-length': '178' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/zeroASNName?api-version=2016-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"LocalNetworkGatewayCannotHaveZeroAsn\",\r\n    \"message\": \"The local network gateway /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/zeroASNName cannot have an ASN of zero\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '320',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'dc852c84-f0fd-448d-b856-8673cf60655e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f95915e2-47f1-40ec-9527-72b10efa5d13',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091147Z:f95915e2-47f1-40ec-9527-72b10efa5d13',
  date: 'Mon, 05 Dec 2016 09:11:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/zeroASNName?api-version=2016-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"LocalNetworkGatewayCannotHaveZeroAsn\",\r\n    \"message\": \"The local network gateway /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/zeroASNName cannot have an ASN of zero\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '320',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'dc852c84-f0fd-448d-b856-8673cf60655e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f95915e2-47f1-40ec-9527-72b10efa5d13',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091147Z:f95915e2-47f1-40ec-9527-72b10efa5d13',
  date: 'Mon, 05 Dec 2016 09:11:47 GMT',
  connection: 'close' });
 return result; }]];