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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName?api-version=2016-12-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/invalidServiceProviderName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0b7aecd4-09ef-4a5a-9fb0-82d8571ce385',
  'x-ms-correlation-request-id': '0b7aecd4-09ef-4a5a-9fb0-82d8571ce385',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T095802Z:0b7aecd4-09ef-4a5a-9fb0-82d8571ce385',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 09:58:01 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName?api-version=2016-12-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/invalidServiceProviderName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0b7aecd4-09ef-4a5a-9fb0-82d8571ce385',
  'x-ms-correlation-request-id': '0b7aecd4-09ef-4a5a-9fb0-82d8571ce385',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T095802Z:0b7aecd4-09ef-4a5a-9fb0-82d8571ce385',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 09:58:01 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName?api-version=2016-12-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"ExpressRouteCircuitServiceProviderDoesNotExist\",\r\n    \"message\": \"The Service Provider FakeProvider specified for Express Route Circuit /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName does not exist.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '372',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '755e8367-afc4-474c-a5fe-46afe65af395',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e29d1eac-7878-41b9-8659-0566b45aa192',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T095810Z:e29d1eac-7878-41b9-8659-0566b45aa192',
  date: 'Mon, 13 Mar 2017 09:58:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName?api-version=2016-12-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"ExpressRouteCircuitServiceProviderDoesNotExist\",\r\n    \"message\": \"The Service Provider FakeProvider specified for Express Route Circuit /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/invalidServiceProviderName does not exist.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '372',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '755e8367-afc4-474c-a5fe-46afe65af395',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e29d1eac-7878-41b9-8659-0566b45aa192',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T095810Z:e29d1eac-7878-41b9-8659-0566b45aa192',
  date: 'Mon, 13 Mar 2017 09:58:09 GMT',
  connection: 'close' });
 return result; }]];