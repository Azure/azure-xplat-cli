// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2843db96-7d25-4cf5-8e67-71baed52dfb7',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'BDHadoopHumboldtCRP1_695484',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'eastus';
  process.env['SSHCERT'] = 'C:\HDInsight\azure-xplat-cli\test\myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2843db96-7d25-4cf5-8e67-71baed52dfb7/resourceGroups/xplatTestRgHDInsightClusterCreate2362/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7305?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/2843db96-7d25-4cf5-8e67-71baed52dfb7/resourceGroups/xplatTestRgHDInsightClusterCreate2362/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7305\",\"name\":\"xplatTestHDInsightClusterCreate7305\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"East US\",\"etag\":\"dcd13695-8a67-4e81-a1f9-94e4ec004b32\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.2.1000.0.6183632.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2015-11-24T09:03:37.15\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7305-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7305.azurehdinsight.net\",\"port\":443}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1202',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e77d2160-c755-46c9-8e82-c122bcb91b10',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14876',
  'x-ms-correlation-request-id': 'd9f80225-b26e-4ef9-b3c7-7b82f04b6eb1',
  'x-ms-routing-request-id': 'WESTUS:20151124T093044Z:d9f80225-b26e-4ef9-b3c7-7b82f04b6eb1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 Nov 2015 09:30:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2843db96-7d25-4cf5-8e67-71baed52dfb7/resourceGroups/xplatTestRgHDInsightClusterCreate2362/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7305?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/2843db96-7d25-4cf5-8e67-71baed52dfb7/resourceGroups/xplatTestRgHDInsightClusterCreate2362/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate7305\",\"name\":\"xplatTestHDInsightClusterCreate7305\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"East US\",\"etag\":\"dcd13695-8a67-4e81-a1f9-94e4ec004b32\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.2.1000.0.6183632.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Small\"}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2015-11-24T09:03:37.15\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7305-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate7305.azurehdinsight.net\",\"port\":443}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1202',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e77d2160-c755-46c9-8e82-c122bcb91b10',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14876',
  'x-ms-correlation-request-id': 'd9f80225-b26e-4ef9-b3c7-7b82f04b6eb1',
  'x-ms-routing-request-id': 'WESTUS:20151124T093044Z:d9f80225-b26e-4ef9-b3c7-7b82f04b6eb1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 Nov 2015 09:30:43 GMT',
  connection: 'close' });
 return result; }]];