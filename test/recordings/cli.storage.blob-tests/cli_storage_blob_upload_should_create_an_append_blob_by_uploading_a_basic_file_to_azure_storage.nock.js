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
  .head('/storage-cli-blob-test/appendblobname2369')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2d69f14b-0001-0006-73ff-08aebc000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:01:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/appendblobname2369')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 07 Sep 2016 12:01:38 GMT',
  etag: '"0x8D3D716B948B864"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4286a831-0001-0077-0fff-08dc85000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:01:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storage-cli-blob-test/appendblobname2369?comp=appendblock', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 07 Sep 2016 12:01:38 GMT',
  etag: '"0x8D3D716B96D601D"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0ad1543a-0001-0010-54ff-086f22000000',
  'x-ms-version': '2015-04-05',
  'x-ms-blob-append-offset': '0',
  'x-ms-blob-committed-block-count': '1',
  date: 'Wed, 07 Sep 2016 12:01:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/appendblobname2369?comp=properties')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 07 Sep 2016 12:01:39 GMT',
  etag: '"0x8D3D716B99BF565"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'de931197-0001-0092-50ff-08ce72000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 07 Sep 2016 12:01:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname2369')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 07 Sep 2016 12:01:39 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3D716B99BF565"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '10128264-0001-00f7-60ff-087f2f000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  date: 'Wed, 07 Sep 2016 12:01:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://cliteststorage2874.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname2369')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 07 Sep 2016 12:01:39 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3D716B99BF565"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd04c6217-0001-000f-17ff-08b432000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  date: 'Wed, 07 Sep 2016 12:01:39 GMT' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['appendblobname2369'];};