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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West Europe';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://cliteststorage6387.file.core.windows.net:443')
  .delete('/testfilecopysourceshare?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a2378120-001a-0112-3400-092b8d000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:06:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage6387.file.core.windows.net:443')
  .delete('/testfilecopydestshare?restype=share')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '39e0e864-001a-0099-4e00-09d606000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:06:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage6387.blob.core.windows.net:443')
  .delete('/testfilecopysourcecontainer?restype=container')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2a879f5f-0001-00b7-0e00-0956c1000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:06:02 GMT' });
 return result; }]];