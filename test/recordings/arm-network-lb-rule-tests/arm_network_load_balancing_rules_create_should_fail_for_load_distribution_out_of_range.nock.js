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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"abee7473-591f-48c4-b150-f3b2dd51c064\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"424dcaed-030f-46a6-ac46-9dc461d44c26\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"abee7473-591f-48c4-b150-f3b2dd51c064\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"backendAddressPoolName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/backendAddressPools/backendAddressPoolName\",\r\n        \"etag\": \"W/\\\"abee7473-591f-48c4-b150-f3b2dd51c064\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"probeName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/probes/probeName\",\r\n        \"etag\": \"W/\\\"abee7473-591f-48c4-b150-f3b2dd51c064\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2247',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"abee7473-591f-48c4-b150-f3b2dd51c064"',
  'x-ms-request-id': '8ac3dbaf-d08b-4bb9-8fb3-2fe1f0a96767',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '5ba272d5-498e-41f6-ac21-8caec721bf24',
  'x-ms-routing-request-id': 'WESTEUROPE:20170525T073108Z:5ba272d5-498e-41f6-ac21-8caec721bf24',
  date: 'Thu, 25 May 2017 07:31:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"abee7473-591f-48c4-b150-f3b2dd51c064\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"424dcaed-030f-46a6-ac46-9dc461d44c26\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"abee7473-591f-48c4-b150-f3b2dd51c064\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"backendAddressPoolName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/backendAddressPools/backendAddressPoolName\",\r\n        \"etag\": \"W/\\\"abee7473-591f-48c4-b150-f3b2dd51c064\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"probeName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/probes/probeName\",\r\n        \"etag\": \"W/\\\"abee7473-591f-48c4-b150-f3b2dd51c064\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2247',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"abee7473-591f-48c4-b150-f3b2dd51c064"',
  'x-ms-request-id': '8ac3dbaf-d08b-4bb9-8fb3-2fe1f0a96767',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '5ba272d5-498e-41f6-ac21-8caec721bf24',
  'x-ms-routing-request-id': 'WESTEUROPE:20170525T073108Z:5ba272d5-498e-41f6-ac21-8caec721bf24',
  date: 'Thu, 25 May 2017 07:31:07 GMT',
  connection: 'close' });
 return result; }]];