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
    registeredProviders: ['mobileservice', 'website'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-d6a5-094e5cf8d101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '507',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-d6a5-094e5cf8d101',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'eb0e6580-9c0d-49f9-b72e-fcb80076f1aa',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11993',
  'x-ms-correlation-request-id': '9d9a2138-3993-413f-a67d-17a6d01ead2c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075329Z:9d9a2138-3993-413f-a67d-17a6d01ead2c',
  date: 'Wed, 17 Aug 2016 07:53:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-d6a5-094e5cf8d101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '507',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-d6a5-094e5cf8d101',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'eb0e6580-9c0d-49f9-b72e-fcb80076f1aa',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11993',
  'x-ms-correlation-request-id': '9d9a2138-3993-413f-a67d-17a6d01ead2c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075329Z:9d9a2138-3993-413f-a67d-17a6d01ead2c',
  date: 'Wed, 17 Aug 2016 07:53:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"083ecd80-dd94-4092-a6b2-651e78dfeb78\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  etag: '083ecd80-dd94-4092-a6b2-651e78dfeb78',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8bfbc705-c7ca-4e64-baf6-7563da9757b2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '01cf6b30-4109-479f-9134-3133a2293e77',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075329Z:01cf6b30-4109-479f-9134-3133a2293e77',
  date: 'Wed, 17 Aug 2016 07:53:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"083ecd80-dd94-4092-a6b2-651e78dfeb78\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  etag: '083ecd80-dd94-4092-a6b2-651e78dfeb78',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8bfbc705-c7ca-4e64-baf6-7563da9757b2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '01cf6b30-4109-479f-9134-3133a2293e77',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075329Z:01cf6b30-4109-479f-9134-3133a2293e77',
  date: 'Wed, 17 Aug 2016 07:53:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"adf6d9d0-adfe-4bb5-aa1c-cde4eda3ab6b\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com\",\"weight\":2}]}}", { 'cache-control': 'private',
  'content-length': '454',
  'content-type': 'application/json; charset=utf-8',
  etag: 'adf6d9d0-adfe-4bb5-aa1c-cde4eda3ab6b',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '96d90d18-f8bf-4d5a-93da-e374cddbfcfc',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11997',
  'x-ms-correlation-request-id': '8a22db9e-2cc1-4b33-b05a-7ee6d155dfdc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075330Z:8a22db9e-2cc1-4b33-b05a-7ee6d155dfdc',
  date: 'Wed, 17 Aug 2016 07:53:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"adf6d9d0-adfe-4bb5-aa1c-cde4eda3ab6b\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com\",\"weight\":2}]}}", { 'cache-control': 'private',
  'content-length': '454',
  'content-type': 'application/json; charset=utf-8',
  etag: 'adf6d9d0-adfe-4bb5-aa1c-cde4eda3ab6b',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '96d90d18-f8bf-4d5a-93da-e374cddbfcfc',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11997',
  'x-ms-correlation-request-id': '8a22db9e-2cc1-4b33-b05a-7ee6d155dfdc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075330Z:8a22db9e-2cc1-4b33-b05a-7ee6d155dfdc',
  date: 'Wed, 17 Aug 2016 07:53:30 GMT',
  connection: 'close' });
 return result; }]];