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
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9283/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2016-04-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '454e1e9a-c289-4107-bc1a-419bd8fe6bde',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '61396287-8c73-4a9c-98c6-28d4a230aa80',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T091026Z:61396287-8c73-4a9c-98c6-28d4a230aa80',
  date: 'Wed, 17 Aug 2016 09:10:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9283/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2016-04-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '454e1e9a-c289-4107-bc1a-419bd8fe6bde',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '61396287-8c73-4a9c-98c6-28d4a230aa80',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T091026Z:61396287-8c73-4a9c-98c6-28d4a230aa80',
  date: 'Wed, 17 Aug 2016 09:10:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9283/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-a' does not exist in resource group 'xplat-test-dns-zone-record-set9283' of subscription '2c224e7e-3ef5-431d-a57b-e71f4662e3a6'.\"}", { 'cache-control': 'private',
  'content-length': '185',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5d07e352-7e4a-445b-ae9a-61a309e0d941',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'f68bd8d6-e373-4e5a-acf8-74a8f871adf2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T091027Z:f68bd8d6-e373-4e5a-acf8-74a8f871adf2',
  date: 'Wed, 17 Aug 2016 09:10:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9283/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-a' does not exist in resource group 'xplat-test-dns-zone-record-set9283' of subscription '2c224e7e-3ef5-431d-a57b-e71f4662e3a6'.\"}", { 'cache-control': 'private',
  'content-length': '185',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5d07e352-7e4a-445b-ae9a-61a309e0d941',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'f68bd8d6-e373-4e5a-acf8-74a8f871adf2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160817T091027Z:f68bd8d6-e373-4e5a-acf8-74a8f871adf2',
  date: 'Wed, 17 Aug 2016 09:10:27 GMT',
  connection: 'close' });
 return result; }]];