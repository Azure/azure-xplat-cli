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
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6646?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6646\",\r\n  \"name\": \"xplatTestaAvail6646\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '420',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'ae76ead4-4815-4ef9-9592-d864d0faa2be',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': '5032897c-a4c8-4194-a415-70590fe9d3de',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T212534Z:5032897c-a4c8-4194-a415-70590fe9d3de',
  date: 'Thu, 11 Aug 2016 21:25:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6646?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate612/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail6646\",\r\n  \"name\": \"xplatTestaAvail6646\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '420',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'ae76ead4-4815-4ef9-9592-d864d0faa2be',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': '5032897c-a4c8-4194-a415-70590fe9d3de',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T212534Z:5032897c-a4c8-4194-a415-70590fe9d3de',
  date: 'Thu, 11 Aug 2016 21:25:34 GMT',
  connection: 'close' });
 return result; }]];