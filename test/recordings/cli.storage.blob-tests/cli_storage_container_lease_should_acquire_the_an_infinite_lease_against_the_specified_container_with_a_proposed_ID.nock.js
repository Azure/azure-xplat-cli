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
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .put('/storageclitest?restype=container&comp=lease')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 07 Sep 2016 12:00:30 GMT',
  etag: '"0x8D3D71690D5CE36"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b5602869-0001-001e-37ff-088329000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '633e7d74-5522-49ae-9f9f-64a860dd00ab',
  date: 'Wed, 07 Sep 2016 12:00:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 07 Sep 2016 12:00:30 GMT',
  etag: '"0x8D3D71690D5CE36"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b78c0d49-0001-003f-5fff-08ee18000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'infinite',
  date: 'Wed, 07 Sep 2016 12:00:36 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 07 Sep 2016 12:00:30 GMT',
  etag: '"0x8D3D71690D5CE36"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6a50dfec-0001-0054-78ff-08b34e000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:00:36 GMT' });
 return result; }]];