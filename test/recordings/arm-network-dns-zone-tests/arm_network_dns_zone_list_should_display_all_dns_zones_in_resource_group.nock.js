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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000003-0000-0000-721a-88b366f8d101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":2}}]}", { 'cache-control': 'private',
  'content-length': '518',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '15a2b085-8ebb-472f-bd2d-7c18577dc706',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '0dfb7ae4-f076-4cf1-9e02-6fab8b757ca2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T090703Z:0dfb7ae4-f076-4cf1-9e02-6fab8b757ca2',
  date: 'Wed, 17 Aug 2016 09:07:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000003-0000-0000-721a-88b366f8d101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":2}}]}", { 'cache-control': 'private',
  'content-length': '518',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '15a2b085-8ebb-472f-bd2d-7c18577dc706',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '0dfb7ae4-f076-4cf1-9e02-6fab8b757ca2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T090703Z:0dfb7ae4-f076-4cf1-9e02-6fab8b757ca2',
  date: 'Wed, 17 Aug 2016 09:07:03 GMT',
  connection: 'close' });
 return result; }]];