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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/loadBalancerName' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4ca7a527-1004-4252-ad7d-648236037954',
  'x-ms-correlation-request-id': '4ca7a527-1004-4252-ad7d-648236037954',
  'x-ms-routing-request-id': 'WESTEUROPE:20170524T145342Z:4ca7a527-1004-4252-ad7d-648236037954',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 24 May 2017 14:53:42 GMT',
  connection: 'close',
  'content-length': '165' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/loadBalancerName' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4ca7a527-1004-4252-ad7d-648236037954',
  'x-ms-correlation-request-id': '4ca7a527-1004-4252-ad7d-648236037954',
  'x-ms-routing-request-id': 'WESTEUROPE:20170524T145342Z:4ca7a527-1004-4252-ad7d-648236037954',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 24 May 2017 14:53:42 GMT',
  connection: 'close',
  'content-length': '165' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"3064900b-6413-4a6c-8c70-04168b51979d\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"271613b8-7298-4053-a91e-1c33f3c40e66\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '642',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ee383faf-64a8-4b65-8a37-9fca8c256c78',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/ee383faf-64a8-4b65-8a37-9fca8c256c78?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1766dc88-484d-4265-81d0-c7f8b67784c9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170524T145346Z:1766dc88-484d-4265-81d0-c7f8b67784c9',
  date: 'Wed, 24 May 2017 14:53:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"3064900b-6413-4a6c-8c70-04168b51979d\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"271613b8-7298-4053-a91e-1c33f3c40e66\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '642',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ee383faf-64a8-4b65-8a37-9fca8c256c78',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/ee383faf-64a8-4b65-8a37-9fca8c256c78?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1766dc88-484d-4265-81d0-c7f8b67784c9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170524T145346Z:1766dc88-484d-4265-81d0-c7f8b67784c9',
  date: 'Wed, 24 May 2017 14:53:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"3064900b-6413-4a6c-8c70-04168b51979d\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"271613b8-7298-4053-a91e-1c33f3c40e66\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '642',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3064900b-6413-4a6c-8c70-04168b51979d"',
  'x-ms-request-id': 'd21271dc-c0c2-43be-8881-a991858ba092',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14880',
  'x-ms-correlation-request-id': '954329d9-48ea-423e-b89c-e21b1a3704ac',
  'x-ms-routing-request-id': 'WESTEUROPE:20170524T145347Z:954329d9-48ea-423e-b89c-e21b1a3704ac',
  date: 'Wed, 24 May 2017 14:53:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"3064900b-6413-4a6c-8c70-04168b51979d\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"271613b8-7298-4053-a91e-1c33f3c40e66\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '642',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3064900b-6413-4a6c-8c70-04168b51979d"',
  'x-ms-request-id': 'd21271dc-c0c2-43be-8881-a991858ba092',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14880',
  'x-ms-correlation-request-id': '954329d9-48ea-423e-b89c-e21b1a3704ac',
  'x-ms-routing-request-id': 'WESTEUROPE:20170524T145347Z:954329d9-48ea-423e-b89c-e21b1a3704ac',
  date: 'Wed, 24 May 2017 14:53:47 GMT',
  connection: 'close' });
 return result; }]];