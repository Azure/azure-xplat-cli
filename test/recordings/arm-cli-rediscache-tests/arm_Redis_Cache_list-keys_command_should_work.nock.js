// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '04db7ed3-6ed9-4861-8b22-7c0c0c98490b',
    name: 'AAPT Cache10',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplatTestCacheRG';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG2801/providers/Microsoft.Cache/Redis/xplatTestCache691?api-version=2015-03-01')
  .reply(200, "{\"id\":\"/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG2801/providers/Microsoft.Cache/Redis/xplatTestCache691\",\"location\":\"West US\",\"name\":\"xplatTestCache691\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.0\",\"sku\":{\"name\":\"Standard\",\"family\":\"C\",\"capacity\":1},\"enableNonSslPort\":false,\"redisConfiguration\":{\"maxmemory-policy\":\"allkeys-lru\"},\"accessKeys\":null,\"hostName\":\"xplatTestCache691.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '535',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '291563bc-9cdf-444c-8993-628a63343088',
  'x-rp-server-mvid': 'af670903-1b42-4933-b84c-636f2d204d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14860',
  'x-ms-correlation-request-id': '8c7d1ba5-90a8-4789-b655-0c1fbbc1481f',
  'x-ms-routing-request-id': 'WESTUS:20150818T203018Z:8c7d1ba5-90a8-4789-b655-0c1fbbc1481f',
  date: 'Tue, 18 Aug 2015 20:30:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG2801/providers/Microsoft.Cache/Redis/xplatTestCache691?api-version=2015-03-01')
  .reply(200, "{\"id\":\"/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG2801/providers/Microsoft.Cache/Redis/xplatTestCache691\",\"location\":\"West US\",\"name\":\"xplatTestCache691\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.0\",\"sku\":{\"name\":\"Standard\",\"family\":\"C\",\"capacity\":1},\"enableNonSslPort\":false,\"redisConfiguration\":{\"maxmemory-policy\":\"allkeys-lru\"},\"accessKeys\":null,\"hostName\":\"xplatTestCache691.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '535',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '291563bc-9cdf-444c-8993-628a63343088',
  'x-rp-server-mvid': 'af670903-1b42-4933-b84c-636f2d204d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14860',
  'x-ms-correlation-request-id': '8c7d1ba5-90a8-4789-b655-0c1fbbc1481f',
  'x-ms-routing-request-id': 'WESTUS:20150818T203018Z:8c7d1ba5-90a8-4789-b655-0c1fbbc1481f',
  date: 'Tue, 18 Aug 2015 20:30:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG2801/providers/Microsoft.Cache/Redis/xplatTestCache691/listKeys?api-version=2015-03-01')
  .reply(200, "{\"primaryKey\":\"J/gMxprSNaxWuyMtg7lbWACGSsCBOkVJedGQMA2u9mY=\",\"secondaryKey\":\"ZX//rnLhcRIQWbm2GhNr3yV0nVO9Ycz00omf0I9mols=\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '123',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '36167f75-aeed-4d09-a1ad-7d8bc9d7478b',
  'x-rp-server-mvid': 'af670903-1b42-4933-b84c-636f2d204d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '4b112a37-8b78-495b-9c80-0eb940f06d7f',
  'x-ms-routing-request-id': 'WESTUS:20150818T203018Z:4b112a37-8b78-495b-9c80-0eb940f06d7f',
  date: 'Tue, 18 Aug 2015 20:30:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG2801/providers/Microsoft.Cache/Redis/xplatTestCache691/listKeys?api-version=2015-03-01')
  .reply(200, "{\"primaryKey\":\"J/gMxprSNaxWuyMtg7lbWACGSsCBOkVJedGQMA2u9mY=\",\"secondaryKey\":\"ZX//rnLhcRIQWbm2GhNr3yV0nVO9Ycz00omf0I9mols=\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '123',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '36167f75-aeed-4d09-a1ad-7d8bc9d7478b',
  'x-rp-server-mvid': 'af670903-1b42-4933-b84c-636f2d204d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '4b112a37-8b78-495b-9c80-0eb940f06d7f',
  'x-ms-routing-request-id': 'WESTUS:20150818T203018Z:4b112a37-8b78-495b-9c80-0eb940f06d7f',
  date: 'Tue, 18 Aug 2015 20:30:18 GMT',
  connection: 'close' });
 return result; }]];