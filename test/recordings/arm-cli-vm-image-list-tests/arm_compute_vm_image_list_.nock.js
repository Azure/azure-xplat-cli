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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus/Enterprise/versions?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"10.50.4021\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.4021\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"10.50.4319\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.4319\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"10.50.6000\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.6000\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '888',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd56a62d8-6807-410a-846f-4426c5dd5e1e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e227e267-7759-4c36-85cd-531d9c1d97e8',
  'x-ms-routing-request-id': 'EASTUS:20160718T194029Z:e227e267-7759-4c36-85cd-531d9c1d97e8',
  date: 'Mon, 18 Jul 2016 19:40:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus/Enterprise/versions?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"10.50.4021\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.4021\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"10.50.4319\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.4319\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"10.50.6000\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.6000\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '888',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd56a62d8-6807-410a-846f-4426c5dd5e1e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e227e267-7759-4c36-85cd-531d9c1d97e8',
  'x-ms-routing-request-id': 'EASTUS:20160718T194029Z:e227e267-7759-4c36-85cd-531d9c1d97e8',
  date: 'Mon, 18 Jul 2016 19:40:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/SQL2008R2SP3-WS2008R2SP1/artifacttypes/vmimage/offers/MicrosoftSQLServer/skus/Enterprise/versions/10.50.6000?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Publisher: SQL2008R2SP3-WS2008R2SP1 was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '317adb95-ba12-41c9-bdac-9f452a5039ac',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'ebb70401-546a-487a-bde0-a0c42106189a',
  'x-ms-routing-request-id': 'EASTUS:20160718T194030Z:ebb70401-546a-487a-bde0-a0c42106189a',
  date: 'Mon, 18 Jul 2016 19:40:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/SQL2008R2SP3-WS2008R2SP1/artifacttypes/vmimage/offers/MicrosoftSQLServer/skus/Enterprise/versions/10.50.6000?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Publisher: SQL2008R2SP3-WS2008R2SP1 was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '317adb95-ba12-41c9-bdac-9f452a5039ac',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'ebb70401-546a-487a-bde0-a0c42106189a',
  'x-ms-routing-request-id': 'EASTUS:20160718T194030Z:ebb70401-546a-487a-bde0-a0c42106189a',
  date: 'Mon, 18 Jul 2016 19:40:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/SQL2008R2SP3-WS2008R2SP1/artifacttypes/vmimage/offers/MicrosoftSQLServer/skus/Enterprise/versions/10.50.4021?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Publisher: SQL2008R2SP3-WS2008R2SP1 was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9959a15a-e0b6-46b4-b855-5beaeeb3e975',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '714e9dde-dd5e-4fc6-a18a-ec3557303d02',
  'x-ms-routing-request-id': 'EASTUS:20160718T194030Z:714e9dde-dd5e-4fc6-a18a-ec3557303d02',
  date: 'Mon, 18 Jul 2016 19:40:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/SQL2008R2SP3-WS2008R2SP1/artifacttypes/vmimage/offers/MicrosoftSQLServer/skus/Enterprise/versions/10.50.4021?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Publisher: SQL2008R2SP3-WS2008R2SP1 was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9959a15a-e0b6-46b4-b855-5beaeeb3e975',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '714e9dde-dd5e-4fc6-a18a-ec3557303d02',
  'x-ms-routing-request-id': 'EASTUS:20160718T194030Z:714e9dde-dd5e-4fc6-a18a-ec3557303d02',
  date: 'Mon, 18 Jul 2016 19:40:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/SQL2008R2SP3-WS2008R2SP1/artifacttypes/vmimage/offers/MicrosoftSQLServer/skus/Enterprise/versions/10.50.4319?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Publisher: SQL2008R2SP3-WS2008R2SP1 was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8d7d3731-1849-4d53-941e-4cd10cf7e23f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'aec4364c-78f6-419a-9d01-36384bba6052',
  'x-ms-routing-request-id': 'EASTUS:20160718T194030Z:aec4364c-78f6-419a-9d01-36384bba6052',
  date: 'Mon, 18 Jul 2016 19:40:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/SQL2008R2SP3-WS2008R2SP1/artifacttypes/vmimage/offers/MicrosoftSQLServer/skus/Enterprise/versions/10.50.4319?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Publisher: SQL2008R2SP3-WS2008R2SP1 was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8d7d3731-1849-4d53-941e-4cd10cf7e23f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'aec4364c-78f6-419a-9d01-36384bba6052',
  'x-ms-routing-request-id': 'EASTUS:20160718T194030Z:aec4364c-78f6-419a-9d01-36384bba6052',
  date: 'Mon, 18 Jul 2016 19:40:30 GMT',
  connection: 'close' });
 return result; }]];