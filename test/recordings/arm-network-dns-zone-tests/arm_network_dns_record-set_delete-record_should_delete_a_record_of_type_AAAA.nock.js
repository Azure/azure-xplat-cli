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
  'x-ms-request-id': '0d73e4ca-774b-4d8d-a666-aee9c2862acd',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11995',
  'x-ms-correlation-request-id': '0ea6204d-47b2-4690-9059-bb2d19085c15',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075252Z:0ea6204d-47b2-4690-9059-bb2d19085c15',
  date: 'Wed, 17 Aug 2016 07:52:51 GMT',
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
  'x-ms-request-id': '0d73e4ca-774b-4d8d-a666-aee9c2862acd',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11995',
  'x-ms-correlation-request-id': '0ea6204d-47b2-4690-9059-bb2d19085c15',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075252Z:0ea6204d-47b2-4690-9059-bb2d19085c15',
  date: 'Wed, 17 Aug 2016 07:52:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"3e88867f-325d-4a2b-9dca-96b21296c6f4\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}}", { 'cache-control': 'private',
  'content-length': '440',
  'content-type': 'application/json; charset=utf-8',
  etag: '3e88867f-325d-4a2b-9dca-96b21296c6f4',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '10a399bb-99c7-4dee-9bd1-f21d37bb1f90',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7fc5add1-33a7-4b56-8a3f-d0f2a042d25b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075253Z:7fc5add1-33a7-4b56-8a3f-d0f2a042d25b',
  date: 'Wed, 17 Aug 2016 07:52:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"3e88867f-325d-4a2b-9dca-96b21296c6f4\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}}", { 'cache-control': 'private',
  'content-length': '440',
  'content-type': 'application/json; charset=utf-8',
  etag: '3e88867f-325d-4a2b-9dca-96b21296c6f4',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '10a399bb-99c7-4dee-9bd1-f21d37bb1f90',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7fc5add1-33a7-4b56-8a3f-d0f2a042d25b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075253Z:7fc5add1-33a7-4b56-8a3f-d0f2a042d25b',
  date: 'Wed, 17 Aug 2016 07:52:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"625ea40f-5d81-4738-9a4a-179be7b95926\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '404',
  'content-type': 'application/json; charset=utf-8',
  etag: '625ea40f-5d81-4738-9a4a-179be7b95926',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2791f15b-d9de-4f28-ad38-cc9d3489838c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'b199841a-d7c9-4d76-9464-9337d523550a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075254Z:b199841a-d7c9-4d76-9464-9337d523550a',
  date: 'Wed, 17 Aug 2016 07:52:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"625ea40f-5d81-4738-9a4a-179be7b95926\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '404',
  'content-type': 'application/json; charset=utf-8',
  etag: '625ea40f-5d81-4738-9a4a-179be7b95926',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2791f15b-d9de-4f28-ad38-cc9d3489838c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'b199841a-d7c9-4d76-9464-9337d523550a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075254Z:b199841a-d7c9-4d76-9464-9337d523550a',
  date: 'Wed, 17 Aug 2016 07:52:53 GMT',
  connection: 'close' });
 return result; }]];