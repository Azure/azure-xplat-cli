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
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"083ecd80-dd94-4092-a6b2-651e78dfeb78\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  etag: '083ecd80-dd94-4092-a6b2-651e78dfeb78',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'cb54dbca-d875-497e-afd6-dd6389fc0e0a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '7e124209-f578-4cdf-a7c9-8252a7f9d8ee',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075328Z:7e124209-f578-4cdf-a7c9-8252a7f9d8ee',
  date: 'Wed, 17 Aug 2016 07:53:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set300/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set300\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"083ecd80-dd94-4092-a6b2-651e78dfeb78\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  etag: '083ecd80-dd94-4092-a6b2-651e78dfeb78',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'cb54dbca-d875-497e-afd6-dd6389fc0e0a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '7e124209-f578-4cdf-a7c9-8252a7f9d8ee',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T075328Z:7e124209-f578-4cdf-a7c9-8252a7f9d8ee',
  date: 'Wed, 17 Aug 2016 07:53:28 GMT',
  connection: 'close' });
 return result; }]];