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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/tooLongDescriptionName?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/tooLongDescriptionName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '301',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '02117fcb-f491-482c-8e4b-2876a056847c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '08fe139f-96b9-40b6-85dc-3a4f55d36529',
  'x-ms-routing-request-id': 'WESTEUROPE:20170525T074731Z:08fe139f-96b9-40b6-85dc-3a4f55d36529',
  date: 'Thu, 25 May 2017 07:47:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/tooLongDescriptionName?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/tooLongDescriptionName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '301',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '02117fcb-f491-482c-8e4b-2876a056847c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '08fe139f-96b9-40b6-85dc-3a4f55d36529',
  'x-ms-routing-request-id': 'WESTEUROPE:20170525T074731Z:08fe139f-96b9-40b6-85dc-3a4f55d36529',
  date: 'Thu, 25 May 2017 07:47:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/tooLongDescriptionName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleDescriptionTooLong\",\r\n    \"message\": \"Security rule description cannot exceed 140 chars.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '159',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f13e34c9-bb95-48d7-aaee-b17623943859',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'a7f9ac46-c748-4a67-9fd9-6b5215cc017b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170525T074732Z:a7f9ac46-c748-4a67-9fd9-6b5215cc017b',
  date: 'Thu, 25 May 2017 07:47:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/tooLongDescriptionName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleDescriptionTooLong\",\r\n    \"message\": \"Security rule description cannot exceed 140 chars.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '159',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f13e34c9-bb95-48d7-aaee-b17623943859',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'a7f9ac46-c748-4a67-9fd9-6b5215cc017b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170525T074732Z:a7f9ac46-c748-4a67-9fd9-6b5215cc017b',
  date: 'Thu, 25 May 2017 07:47:31 GMT',
  connection: 'close' });
 return result; }]];