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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits?api-version=2016-12-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"expressRouteCircuitName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName\",\r\n      \"etag\": \"W/\\\"07ae2dc8-e11d-455b-8056-3f5e58c23c09\\\"\",\r\n      \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n      \"location\": \"brazilsouth\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"53c05bd4-ec0a-40f6-81d5-8ce82812615e\",\r\n        \"peerings\": [],\r\n        \"authorizations\": [],\r\n        \"serviceProviderProperties\": {\r\n          \"serviceProviderName\": \"Interxion\",\r\n          \"peeringLocation\": \"London\",\r\n          \"bandwidthInMbps\": 200\r\n        },\r\n        \"circuitProvisioningState\": \"Enabled\",\r\n        \"allowClassicOperations\": false,\r\n        \"serviceKey\": \"916d760e-a61b-4e72-aea7-e58b3884339f\",\r\n        \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n      },\r\n      \"sku\": {\r\n        \"name\": \"Standard_MeteredData\",\r\n        \"tier\": \"Premium\",\r\n        \"family\": \"UnlimitedData\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1120',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ae1078bd-02a2-42da-8f49-da0f169f0a49',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'db4dd856-c93f-428d-a4e6-30b4092860f8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T095315Z:db4dd856-c93f-428d-a4e6-30b4092860f8',
  date: 'Mon, 13 Mar 2017 09:53:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits?api-version=2016-12-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"expressRouteCircuitName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName\",\r\n      \"etag\": \"W/\\\"07ae2dc8-e11d-455b-8056-3f5e58c23c09\\\"\",\r\n      \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n      \"location\": \"brazilsouth\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"53c05bd4-ec0a-40f6-81d5-8ce82812615e\",\r\n        \"peerings\": [],\r\n        \"authorizations\": [],\r\n        \"serviceProviderProperties\": {\r\n          \"serviceProviderName\": \"Interxion\",\r\n          \"peeringLocation\": \"London\",\r\n          \"bandwidthInMbps\": 200\r\n        },\r\n        \"circuitProvisioningState\": \"Enabled\",\r\n        \"allowClassicOperations\": false,\r\n        \"serviceKey\": \"916d760e-a61b-4e72-aea7-e58b3884339f\",\r\n        \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n      },\r\n      \"sku\": {\r\n        \"name\": \"Standard_MeteredData\",\r\n        \"tier\": \"Premium\",\r\n        \"family\": \"UnlimitedData\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1120',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ae1078bd-02a2-42da-8f49-da0f169f0a49',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'db4dd856-c93f-428d-a4e6-30b4092860f8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T095315Z:db4dd856-c93f-428d-a4e6-30b4092860f8',
  date: 'Mon, 13 Mar 2017 09:53:15 GMT',
  connection: 'close' });
 return result; }]];