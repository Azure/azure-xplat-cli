// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestGAvailCreate3890?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate3890' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '7dfecdcd-6f4e-44c4-9f49-d58b5ab0b35a',
  'x-ms-correlation-request-id': '7dfecdcd-6f4e-44c4-9f49-d58b5ab0b35a',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230026Z:7dfecdcd-6f4e-44c4-9f49-d58b5ab0b35a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:00:25 GMT',
  connection: 'close',
  'content-length': '117' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestGAvailCreate3890?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate3890' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '7dfecdcd-6f4e-44c4-9f49-d58b5ab0b35a',
  'x-ms-correlation-request-id': '7dfecdcd-6f4e-44c4-9f49-d58b5ab0b35a',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230026Z:7dfecdcd-6f4e-44c4-9f49-d58b5ab0b35a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:00:25 GMT',
  connection: 'close',
  'content-length': '117' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestGAvailCreate3890?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890\",\"name\":\"xplatTestGAvailCreate3890\",\"location\":\"eastus\",\"tags\":{\"arm-cli-availset-tests\":\"2016-04-25T23:00:25.566Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '709cc0ec-f303-4b15-b3c7-ccdc8bf9692d',
  'x-ms-correlation-request-id': '709cc0ec-f303-4b15-b3c7-ccdc8bf9692d',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230028Z:709cc0ec-f303-4b15-b3c7-ccdc8bf9692d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:00:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestGAvailCreate3890?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890\",\"name\":\"xplatTestGAvailCreate3890\",\"location\":\"eastus\",\"tags\":{\"arm-cli-availset-tests\":\"2016-04-25T23:00:25.566Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '709cc0ec-f303-4b15-b3c7-ccdc8bf9692d',
  'x-ms-correlation-request-id': '709cc0ec-f303-4b15-b3c7-ccdc8bf9692d',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230028Z:709cc0ec-f303-4b15-b3c7-ccdc8bf9692d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:00:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Compute/availabilitySets/xplatTestaAvail9155' under resource group 'xplatTestGAvailCreate3890' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b3d2a926-0140-41b6-ad8a-e183f94e44db',
  'x-ms-correlation-request-id': 'b3d2a926-0140-41b6-ad8a-e183f94e44db',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230029Z:b3d2a926-0140-41b6-ad8a-e183f94e44db',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:00:28 GMT',
  connection: 'close',
  'content-length': '183' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Compute/availabilitySets/xplatTestaAvail9155' under resource group 'xplatTestGAvailCreate3890' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b3d2a926-0140-41b6-ad8a-e183f94e44db',
  'x-ms-correlation-request-id': 'b3d2a926-0140-41b6-ad8a-e183f94e44db',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230029Z:b3d2a926-0140-41b6-ad8a-e183f94e44db',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 25 Apr 2016 23:00:28 GMT',
  connection: 'close',
  'content-length': '183' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155\",\r\n  \"name\": \"xplatTestaAvail9155\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '393',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': 'c030bc33-8834-4d7d-a2b7-1209eff0db6d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '65d53e14-812e-46d9-874d-36c1b9a13871',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230031Z:65d53e14-812e-46d9-874d-36c1b9a13871',
  date: 'Mon, 25 Apr 2016 23:00:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate3890/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail9155\",\r\n  \"name\": \"xplatTestaAvail9155\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '393',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': 'c030bc33-8834-4d7d-a2b7-1209eff0db6d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '65d53e14-812e-46d9-874d-36c1b9a13871',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230031Z:65d53e14-812e-46d9-874d-36c1b9a13871',
  date: 'Mon, 25 Apr 2016 23:00:30 GMT',
  connection: 'close' });
 return result; }]];