// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6623/providers/Microsoft.Network/dnszones/exampledns.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set6623\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"dbf3c783-f1a4-4222-b736-8421c8e77bc9\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.exampledns.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: 'dbf3c783-f1a4-4222-b736-8421c8e77bc9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '75fc4c01-c2e0-49c9-ae1b-1ae009f11380',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'fa496f53-4e8d-4e29-8b4c-10fca54e10c8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T143110Z:fa496f53-4e8d-4e29-8b4c-10fca54e10c8',
  date: 'Fri, 28 Jul 2017 14:31:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6623/providers/Microsoft.Network/dnszones/exampledns.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set6623\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"dbf3c783-f1a4-4222-b736-8421c8e77bc9\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.exampledns.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: 'dbf3c783-f1a4-4222-b736-8421c8e77bc9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '75fc4c01-c2e0-49c9-ae1b-1ae009f11380',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'fa496f53-4e8d-4e29-8b4c-10fca54e10c8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T143110Z:fa496f53-4e8d-4e29-8b4c-10fca54e10c8',
  date: 'Fri, 28 Jul 2017 14:31:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6623/providers/Microsoft.Network/dnszones/exampledns.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e877d895-c6a3-467e-bf71-9ac704735476',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '0b0337f3-21a4-4f2e-ac3f-03a5debbe6b1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T143111Z:0b0337f3-21a4-4f2e-ac3f-03a5debbe6b1',
  date: 'Fri, 28 Jul 2017 14:31:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6623/providers/Microsoft.Network/dnszones/exampledns.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e877d895-c6a3-467e-bf71-9ac704735476',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '0b0337f3-21a4-4f2e-ac3f-03a5debbe6b1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T143111Z:0b0337f3-21a4-4f2e-ac3f-03a5debbe6b1',
  date: 'Fri, 28 Jul 2017 14:31:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6623/providers/Microsoft.Network/dnszones/exampledns.com/TXT/set-txt?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-txt' does not exist in resource group 'xplat-test-dns-zone-record-set6623' of subscription '947d47b4-7883-4bb9-9d85-c5e8e2f572ce'.\"}", { 'cache-control': 'private',
  'content-length': '187',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '527f001f-35a3-47cc-a164-5888f2b1bf01',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'a4321484-9645-4822-9763-21754a34e049',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T143113Z:a4321484-9645-4822-9763-21754a34e049',
  date: 'Fri, 28 Jul 2017 14:31:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set6623/providers/Microsoft.Network/dnszones/exampledns.com/TXT/set-txt?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-txt' does not exist in resource group 'xplat-test-dns-zone-record-set6623' of subscription '947d47b4-7883-4bb9-9d85-c5e8e2f572ce'.\"}", { 'cache-control': 'private',
  'content-length': '187',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '527f001f-35a3-47cc-a164-5888f2b1bf01',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'a4321484-9645-4822-9763-21754a34e049',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T143113Z:a4321484-9645-4822-9763-21754a34e049',
  date: 'Fri, 28 Jul 2017 14:31:12 GMT',
  connection: 'close' });
 return result; }]];