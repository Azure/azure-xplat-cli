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
  .get('/storageclitest3?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>sharepolicy01</Id><AccessPolicy><Start>2015-12-01T00:00:00.0000000Z</Start><Expiry>2100-12-31T00:00:00.0000000Z</Expiry><Permission>rwdl</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>sharepolicy02</Id><AccessPolicy><Start>2015-05-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 07 Sep 2016 12:05:41 GMT',
  etag: '"0x8D3D7174A472585"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8cabe979-001a-0087-3d00-090ceb000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:05:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage6387.file.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitest3?restype=share&comp=acl', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 07 Sep 2016 12:05:42 GMT',
  etag: '"0x8D3D7174AC41484"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6635706c-001a-00fb-5300-0991de000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:05:42 GMT' });
 return result; }]];