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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/b6375231-60f3-4b10-ab99-6ba336bcec58?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/b6375231-60f3-4b10-ab99-6ba336bcec58?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': 'b6375231-60f3-4b10-ab99-6ba336bcec58',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '44d9c4a4-0622-4061-b2a8-389bd6dc45d0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T085822Z:44d9c4a4-0622-4061-b2a8-389bd6dc45d0',
  date: 'Tue, 16 Aug 2016 08:58:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/b6375231-60f3-4b10-ab99-6ba336bcec58?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:58:21.5437864+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"b6375231-60f3-4b10-ab99-6ba336bcec58\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '772382f5-d574-452d-875a-a87af38eaae9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'd900bab6-e289-4429-bd02-6d6e62a0452b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T085853Z:d900bab6-e289-4429-bd02-6d6e62a0452b',
  date: 'Tue, 16 Aug 2016 08:58:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/b6375231-60f3-4b10-ab99-6ba336bcec58?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:58:21.5437864+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"b6375231-60f3-4b10-ab99-6ba336bcec58\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '801d76bc-1fe7-4303-ad7f-f4f149a52188',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '8e5a2559-ff4b-4255-ab2d-a8d422039cff',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T085926Z:8e5a2559-ff4b-4255-ab2d-a8d422039cff',
  date: 'Tue, 16 Aug 2016 08:59:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/b6375231-60f3-4b10-ab99-6ba336bcec58?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:58:21.5437864+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"b6375231-60f3-4b10-ab99-6ba336bcec58\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': '02cf5532-0073-49e3-816c-538d6114a572',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': 'e8a3169a-6125-4319-bcb8-dadaf412d4ec',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T085958Z:e8a3169a-6125-4319-bcb8-dadaf412d4ec',
  date: 'Tue, 16 Aug 2016 08:59:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/b6375231-60f3-4b10-ab99-6ba336bcec58?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-16T08:58:21.5437864+00:00\",\r\n  \"endTime\": \"2016-08-16T09:00:03.4819474+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"b6375231-60f3-4b10-ab99-6ba336bcec58\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131157682951232301',
  'x-ms-request-id': 'be0373e8-0964-4a56-ac23-3876c4c92d62',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': 'e1e47bb2-51d9-40b7-829c-4a57116c00aa',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T090029Z:e1e47bb2-51d9-40b7-829c-4a57116c00aa',
  date: 'Tue, 16 Aug 2016 09:00:28 GMT' });
 return result; }]];