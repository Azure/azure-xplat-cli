// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate589/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '50fe67e0-e312-40e0-bd32-6fbcff1c2373',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '15a22590-f62e-4f20-805f-53a1ede42ca5',
  'x-ms-routing-request-id': 'WESTUS:20160201T231222Z:15a22590-f62e-4f20-805f-53a1ede42ca5',
  date: 'Mon, 01 Feb 2016 23:12:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate589/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '50fe67e0-e312-40e0-bd32-6fbcff1c2373',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '15a22590-f62e-4f20-805f-53a1ede42ca5',
  'x-ms-routing-request-id': 'WESTUS:20160201T231222Z:15a22590-f62e-4f20-805f-53a1ede42ca5',
  date: 'Mon, 01 Feb 2016 23:12:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"50fe67e0-e312-40e0-bd32-6fbcff1c2373\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:12:21.6460928+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': 'b453be1a-e2d7-47ec-92a8-3b1778d86cb3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'cbc2f360-aeb6-4297-92cc-f3ce8d46cf19',
  'x-ms-routing-request-id': 'WESTUS:20160201T231253Z:cbc2f360-aeb6-4297-92cc-f3ce8d46cf19',
  date: 'Mon, 01 Feb 2016 23:12:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"50fe67e0-e312-40e0-bd32-6fbcff1c2373\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:12:21.6460928+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': 'b453be1a-e2d7-47ec-92a8-3b1778d86cb3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'cbc2f360-aeb6-4297-92cc-f3ce8d46cf19',
  'x-ms-routing-request-id': 'WESTUS:20160201T231253Z:cbc2f360-aeb6-4297-92cc-f3ce8d46cf19',
  date: 'Mon, 01 Feb 2016 23:12:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"50fe67e0-e312-40e0-bd32-6fbcff1c2373\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:12:21.6460928+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '2a665461-7ebb-450d-af2f-44ef5615a6b5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '54148949-49d5-4a25-9ce0-e5f2e8589448',
  'x-ms-routing-request-id': 'WESTUS:20160201T231324Z:54148949-49d5-4a25-9ce0-e5f2e8589448',
  date: 'Mon, 01 Feb 2016 23:13:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"50fe67e0-e312-40e0-bd32-6fbcff1c2373\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:12:21.6460928+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '2a665461-7ebb-450d-af2f-44ef5615a6b5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '54148949-49d5-4a25-9ce0-e5f2e8589448',
  'x-ms-routing-request-id': 'WESTUS:20160201T231324Z:54148949-49d5-4a25-9ce0-e5f2e8589448',
  date: 'Mon, 01 Feb 2016 23:13:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"50fe67e0-e312-40e0-bd32-6fbcff1c2373\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:12:21.6460928+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '0c69efe0-2794-4355-bb80-5a37b0158b07',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '34781522-9b98-4df4-991b-b3cef64a860a',
  'x-ms-routing-request-id': 'WESTUS:20160201T231355Z:34781522-9b98-4df4-991b-b3cef64a860a',
  date: 'Mon, 01 Feb 2016 23:13:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"50fe67e0-e312-40e0-bd32-6fbcff1c2373\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:12:21.6460928+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '0c69efe0-2794-4355-bb80-5a37b0158b07',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '34781522-9b98-4df4-991b-b3cef64a860a',
  'x-ms-routing-request-id': 'WESTUS:20160201T231355Z:34781522-9b98-4df4-991b-b3cef64a860a',
  date: 'Mon, 01 Feb 2016 23:13:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"50fe67e0-e312-40e0-bd32-6fbcff1c2373\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-02-01T23:12:21.6460928+00:00\",\r\n  \"endTime\": \"2016-02-01T23:14:14.8335966+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '55fc5c0d-9b4e-48fe-828e-cf754ab19604',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '1a534175-9c02-4337-b143-aa711821fc02',
  'x-ms-routing-request-id': 'WESTUS:20160201T231425Z:1a534175-9c02-4337-b143-aa711821fc02',
  date: 'Mon, 01 Feb 2016 23:14:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/50fe67e0-e312-40e0-bd32-6fbcff1c2373?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"50fe67e0-e312-40e0-bd32-6fbcff1c2373\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-02-01T23:12:21.6460928+00:00\",\r\n  \"endTime\": \"2016-02-01T23:14:14.8335966+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '55fc5c0d-9b4e-48fe-828e-cf754ab19604',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '1a534175-9c02-4337-b143-aa711821fc02',
  'x-ms-routing-request-id': 'WESTUS:20160201T231425Z:1a534175-9c02-4337-b143-aa711821fc02',
  date: 'Mon, 01 Feb 2016 23:14:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate589/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '911afca5-d1d2-49d9-8035-8cab71a1f456',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '95b1930e-b40d-41cc-9657-3738215c31ae',
  'x-ms-routing-request-id': 'WESTUS:20160201T231428Z:95b1930e-b40d-41cc-9657-3738215c31ae',
  date: 'Mon, 01 Feb 2016 23:14:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate589/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '911afca5-d1d2-49d9-8035-8cab71a1f456',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '95b1930e-b40d-41cc-9657-3738215c31ae',
  'x-ms-routing-request-id': 'WESTUS:20160201T231428Z:95b1930e-b40d-41cc-9657-3738215c31ae',
  date: 'Mon, 01 Feb 2016 23:14:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"911afca5-d1d2-49d9-8035-8cab71a1f456\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:14:27.5679781+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': 'be1b8597-e36f-4919-bc7d-fa385ecefbde',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '564a703a-fc47-434d-9873-bb0f7fc20374',
  'x-ms-routing-request-id': 'WESTUS:20160201T231459Z:564a703a-fc47-434d-9873-bb0f7fc20374',
  date: 'Mon, 01 Feb 2016 23:14:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"911afca5-d1d2-49d9-8035-8cab71a1f456\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:14:27.5679781+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': 'be1b8597-e36f-4919-bc7d-fa385ecefbde',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '564a703a-fc47-434d-9873-bb0f7fc20374',
  'x-ms-routing-request-id': 'WESTUS:20160201T231459Z:564a703a-fc47-434d-9873-bb0f7fc20374',
  date: 'Mon, 01 Feb 2016 23:14:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"911afca5-d1d2-49d9-8035-8cab71a1f456\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:14:27.5679781+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '9e942c81-ad5a-43cc-86b5-4beb8c1a4924',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '26e92c54-4e53-480b-b682-e7cdd4f1078a',
  'x-ms-routing-request-id': 'CENTRALUS:20160201T231530Z:26e92c54-4e53-480b-b682-e7cdd4f1078a',
  date: 'Mon, 01 Feb 2016 23:15:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"911afca5-d1d2-49d9-8035-8cab71a1f456\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:14:27.5679781+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '9e942c81-ad5a-43cc-86b5-4beb8c1a4924',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '26e92c54-4e53-480b-b682-e7cdd4f1078a',
  'x-ms-routing-request-id': 'CENTRALUS:20160201T231530Z:26e92c54-4e53-480b-b682-e7cdd4f1078a',
  date: 'Mon, 01 Feb 2016 23:15:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"911afca5-d1d2-49d9-8035-8cab71a1f456\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:14:27.5679781+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': 'ea9de0b6-f152-4aa3-a0f6-6c9b27368861',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14925',
  'x-ms-correlation-request-id': 'f072a55a-a37d-4be3-a840-e42e0e91447c',
  'x-ms-routing-request-id': 'CENTRALUS:20160201T231601Z:f072a55a-a37d-4be3-a840-e42e0e91447c',
  date: 'Mon, 01 Feb 2016 23:16:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"911afca5-d1d2-49d9-8035-8cab71a1f456\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-02-01T23:14:27.5679781+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': 'ea9de0b6-f152-4aa3-a0f6-6c9b27368861',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14925',
  'x-ms-correlation-request-id': 'f072a55a-a37d-4be3-a840-e42e0e91447c',
  'x-ms-routing-request-id': 'CENTRALUS:20160201T231601Z:f072a55a-a37d-4be3-a840-e42e0e91447c',
  date: 'Mon, 01 Feb 2016 23:16:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"911afca5-d1d2-49d9-8035-8cab71a1f456\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-02-01T23:14:27.5679781+00:00\",\r\n  \"endTime\": \"2016-02-01T23:16:20.7084946+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '045705c9-5bee-49ef-8ac0-239809511b66',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '5e798410-2355-4735-96a2-f507513cd33f',
  'x-ms-routing-request-id': 'WESTUS:20160201T231632Z:5e798410-2355-4735-96a2-f507513cd33f',
  date: 'Mon, 01 Feb 2016 23:16:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/911afca5-d1d2-49d9-8035-8cab71a1f456?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"911afca5-d1d2-49d9-8035-8cab71a1f456\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-02-01T23:14:27.5679781+00:00\",\r\n  \"endTime\": \"2016-02-01T23:16:20.7084946+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130923832742225921',
  'x-ms-request-id': '045705c9-5bee-49ef-8ac0-239809511b66',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '5e798410-2355-4735-96a2-f507513cd33f',
  'x-ms-routing-request-id': 'WESTUS:20160201T231632Z:5e798410-2355-4735-96a2-f507513cd33f',
  date: 'Mon, 01 Feb 2016 23:16:31 GMT',
  connection: 'close' });
 return result; }]];