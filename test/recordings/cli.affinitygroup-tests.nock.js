// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'db1ab6f0-4769-4b27-930e-01e2ef9c123c',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure SDK sandbox',
    username: 'user@domain.example',
    accessToken: {
      accessToken: 'mockedToken',
      refreshToken: 'mockedToken',
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
    },
    registeredProviders: ['sqlserver', 'website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroups', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroup/xplat-afg-1',
  server: '1.0.6198.70 (rd_rdfe_stable.140426-2318) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3e22286cef729bc181ebb1bb733ef70a',
  date: 'Tue, 06 May 2014 17:31:27 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroups/!NotValid$')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The affinity group does not exist.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '199',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.70 (rd_rdfe_stable.140426-2318) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3474a3e41f309d1ebd2153795cb483d6',
  date: 'Tue, 06 May 2014 17:31:28 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroups/xplat-afg-1')
  .reply(200, "<AffinityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplat-afg-1</Name><Label>eHBsYXQtYWZnLTE=</Label><Description>AG-DESC</Description><Location>West US</Location><HostedServices/><StorageServices/><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup>", { 'cache-control': 'no-cache',
  'content-length': '390',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.70 (rd_rdfe_stable.140426-2318) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'a73a950b93349a52a532dcb58a3ad4e8',
  date: 'Tue, 06 May 2014 17:31:28 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroups')
  .reply(200, "<AffinityGroups xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AffinityGroup><Name>AF2</Name><Label>R3JlYXQgQUYy</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>Basic</Capability><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>AF3</Name><Label>R3JlYXQgQUYz</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>AG-CLI-1d0a2453cc8d1118</Name><Label>QUctQ0xJLTFkMGEyNDUzY2M4ZDExMTg=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>Basic</Capability><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-aprhfqbbxb</Name><Label>R3JlYXQgQUYy</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-gxsadvmerr</Name><Label>R3JlYXQgQUYy</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-jmnojztdsq</Name><Label>R3JlYXQgQUY=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-klislnfknp</Name><Label>R3JlYXQgQUYy</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-mrjjrqivqe</Name><Label>R3JlYXQgQUYz</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-oclomljmae</Name><Label>R3JlYXQgQUYz</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-rhontykrlo</Name><Label>R3JlYXQgQUYz</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-wpnmeiqybk</Name><Label>R3JlYXQgQUYz</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-wultalleny</Name><Label>R3JlYXQgQUY=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-ytfkdnmefl</Name><Label>R3JlYXQgQUYz</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-zczgaygccr</Name><Label>R3JlYXQgQUYz</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azure-java-test-zjhbhtftzx</Name><Label>R3JlYXQgQUY=</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azuresdkci</Name><Label>YXp1cmVzZGtjaQ==</Label><Description/><Location>East US</Location><Capabilities><Capability>Basic</Capability><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>azuresdktest05-AG</Name><Label>YXp1cmVzZGt0ZXN0MDUtQUc=</Label><Description/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>integration-test-affinity-group</Name><Label>TGFiZWw=</Label><Description/><Location>East Asia</Location><Capabilities><Capability>Basic</Capability><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>javasdkciag</Name><Label>amF2YXNka2NpYWc=</Label><Description/><Location>West US</Location><Capabilities><Capability>Basic</Capability><Capability>PersistentVMRole</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>my-affinity-group</Name><Label>TGFiZWwgTmFtZQ==</Label><Description/><Location>West US</Location><Capabilities><Capability>Basic</Capability><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>SDK-Automation</Name><Label>U0RLLUF1dG9tYXRpb24=</Label><Description>Used for automation. Do not delete</Description><Location>West US</Location><Capabilities><Capability>Basic</Capability><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>testGetAffinityGroupPropertiesSuccess</Name><Label>dGVzdEdldEFmZmluaXR5R3JvdXBQcm9wZXJ0aWVzU3VjY2Vzcw==</Label><Description i:nil=\"true\"/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup><AffinityGroup><Name>xplat-afg-1</Name><Label>eHBsYXQtYWZnLTE=</Label><Description>AG-DESC</Description><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup></AffinityGroups>", { 'cache-control': 'no-cache',
  'content-length': '6147',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.70 (rd_rdfe_stable.140426-2318) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7ebab2567f1f9f6f947da6cef47bef83',
  date: 'Tue, 06 May 2014 17:31:31 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroups/!NotValid$')
  .reply(400, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>BadRequest</Code><Message>The affinity group name is invalid.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '194',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.70 (rd_rdfe_stable.140426-2318) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2d767e780b9e90da887b478e48088db1',
  date: 'Tue, 06 May 2014 17:31:31 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroups/xplat-afg-1')
  .reply(200, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.70 (rd_rdfe_stable.140426-2318) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c437ae3c89ae92039da8fbfeda8363ef',
  date: 'Tue, 06 May 2014 17:31:33 GMT' });
 return result; }]];