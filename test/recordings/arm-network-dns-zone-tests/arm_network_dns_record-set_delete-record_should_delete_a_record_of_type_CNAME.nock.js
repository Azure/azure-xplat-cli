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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-c2e5-770e6219d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-c2e5-770e6219d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bf341acd-7be8-4e0b-b5f6-d77def43f364',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '72b5a5e8-9dd9-404b-a21b-5cd2c026a140',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082728Z:72b5a5e8-9dd9-404b-a21b-5cd2c026a140',
  date: 'Wed, 28 Sep 2016 08:27:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-c2e5-770e6219d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-c2e5-770e6219d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bf341acd-7be8-4e0b-b5f6-d77def43f364',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '72b5a5e8-9dd9-404b-a21b-5cd2c026a140',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082728Z:72b5a5e8-9dd9-404b-a21b-5cd2c026a140',
  date: 'Wed, 28 Sep 2016 08:27:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"49397455-d8dd-4f9b-b893-383792427fd9\",\"properties\":{\"fqdn\":\"set-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '390',
  'content-type': 'application/json; charset=utf-8',
  etag: '49397455-d8dd-4f9b-b893-383792427fd9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5fd0549e-ae90-4f2d-9e24-1a5dee527e13',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'ecec0ae8-ceed-414a-a184-c5df2a425467',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082728Z:ecec0ae8-ceed-414a-a184-c5df2a425467',
  date: 'Wed, 28 Sep 2016 08:27:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"49397455-d8dd-4f9b-b893-383792427fd9\",\"properties\":{\"fqdn\":\"set-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '390',
  'content-type': 'application/json; charset=utf-8',
  etag: '49397455-d8dd-4f9b-b893-383792427fd9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5fd0549e-ae90-4f2d-9e24-1a5dee527e13',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'ecec0ae8-ceed-414a-a184-c5df2a425467',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082728Z:ecec0ae8-ceed-414a-a184-c5df2a425467',
  date: 'Wed, 28 Sep 2016 08:27:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"49397455-d8dd-4f9b-b893-383792427fd9\",\"properties\":{\"fqdn\":\"set-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '390',
  'content-type': 'application/json; charset=utf-8',
  etag: '49397455-d8dd-4f9b-b893-383792427fd9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c8f1bc5a-8493-4c1f-b037-91517f02be6a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '38b922e2-50a8-4b7c-bdd9-fedae1b29b1a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082729Z:38b922e2-50a8-4b7c-bdd9-fedae1b29b1a',
  date: 'Wed, 28 Sep 2016 08:27:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"49397455-d8dd-4f9b-b893-383792427fd9\",\"properties\":{\"fqdn\":\"set-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '390',
  'content-type': 'application/json; charset=utf-8',
  etag: '49397455-d8dd-4f9b-b893-383792427fd9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c8f1bc5a-8493-4c1f-b037-91517f02be6a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '38b922e2-50a8-4b7c-bdd9-fedae1b29b1a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082729Z:38b922e2-50a8-4b7c-bdd9-fedae1b29b1a',
  date: 'Wed, 28 Sep 2016 08:27:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'de29d0bb-b199-4261-90cb-851a5c7384fb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7e947e95-66f7-4480-9af9-ebcbccea719a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082730Z:7e947e95-66f7-4480-9af9-ebcbccea719a',
  date: 'Wed, 28 Sep 2016 08:27:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'de29d0bb-b199-4261-90cb-851a5c7384fb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7e947e95-66f7-4480-9af9-ebcbccea719a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082730Z:7e947e95-66f7-4480-9af9-ebcbccea719a',
  date: 'Wed, 28 Sep 2016 08:27:30 GMT',
  connection: 'close' });
 return result; }]];