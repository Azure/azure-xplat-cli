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
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate7730/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '0b2c4c18-4c72-4d76-b0cf-82c592a67198',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '0b535c64-2047-4b1e-9b51-4cfdcf3d54a3',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T234351Z:0b535c64-2047-4b1e-9b51-4cfdcf3d54a3',
  date: 'Thu, 11 Aug 2016 23:43:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate7730/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '0b2c4c18-4c72-4d76-b0cf-82c592a67198',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '0b535c64-2047-4b1e-9b51-4cfdcf3d54a3',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T234351Z:0b535c64-2047-4b1e-9b51-4cfdcf3d54a3',
  date: 'Thu, 11 Aug 2016 23:43:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:43:49.7868945+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"0b2c4c18-4c72-4d76-b0cf-82c592a67198\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '9a31debe-8fa9-4af9-a512-12fcae90db6c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': '084199b8-12ce-43ab-ac54-197e750a326e',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T234422Z:084199b8-12ce-43ab-ac54-197e750a326e',
  date: 'Thu, 11 Aug 2016 23:44:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:43:49.7868945+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"0b2c4c18-4c72-4d76-b0cf-82c592a67198\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '9a31debe-8fa9-4af9-a512-12fcae90db6c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': '084199b8-12ce-43ab-ac54-197e750a326e',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T234422Z:084199b8-12ce-43ab-ac54-197e750a326e',
  date: 'Thu, 11 Aug 2016 23:44:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:43:49.7868945+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"0b2c4c18-4c72-4d76-b0cf-82c592a67198\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'd4e434f9-626a-47f7-9ae9-b087afad1bcc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': 'c5f19bfe-6e1e-4895-b0cd-9a39c36fdac7',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T234453Z:c5f19bfe-6e1e-4895-b0cd-9a39c36fdac7',
  date: 'Thu, 11 Aug 2016 23:44:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:43:49.7868945+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"0b2c4c18-4c72-4d76-b0cf-82c592a67198\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'd4e434f9-626a-47f7-9ae9-b087afad1bcc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': 'c5f19bfe-6e1e-4895-b0cd-9a39c36fdac7',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T234453Z:c5f19bfe-6e1e-4895-b0cd-9a39c36fdac7',
  date: 'Thu, 11 Aug 2016 23:44:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:43:49.7868945+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"0b2c4c18-4c72-4d76-b0cf-82c592a67198\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '7ec623f4-f089-4075-a9cb-d27e44278076',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': '68184811-5ba5-4472-8b1b-6855fd00e69c',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T234524Z:68184811-5ba5-4472-8b1b-6855fd00e69c',
  date: 'Thu, 11 Aug 2016 23:45:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:43:49.7868945+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"0b2c4c18-4c72-4d76-b0cf-82c592a67198\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '7ec623f4-f089-4075-a9cb-d27e44278076',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': '68184811-5ba5-4472-8b1b-6855fd00e69c',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T234524Z:68184811-5ba5-4472-8b1b-6855fd00e69c',
  date: 'Thu, 11 Aug 2016 23:45:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:43:49.7868945+00:00\",\r\n  \"endTime\": \"2016-08-11T23:45:42.5063635+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"0b2c4c18-4c72-4d76-b0cf-82c592a67198\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'd7df983d-5ceb-4fe5-a9a2-f7480877211b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': '21234e87-99cf-4c46-a943-df7b00805a0e',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T234555Z:21234e87-99cf-4c46-a943-df7b00805a0e',
  date: 'Thu, 11 Aug 2016 23:45:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/0b2c4c18-4c72-4d76-b0cf-82c592a67198?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-11T23:43:49.7868945+00:00\",\r\n  \"endTime\": \"2016-08-11T23:45:42.5063635+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"0b2c4c18-4c72-4d76-b0cf-82c592a67198\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'd7df983d-5ceb-4fe5-a9a2-f7480877211b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': '21234e87-99cf-4c46-a943-df7b00805a0e',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T234555Z:21234e87-99cf-4c46-a943-df7b00805a0e',
  date: 'Thu, 11 Aug 2016 23:45:54 GMT',
  connection: 'close' });
 return result; }]];