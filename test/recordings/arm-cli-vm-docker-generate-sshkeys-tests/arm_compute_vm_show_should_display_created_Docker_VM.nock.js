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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"b1f1fe5a-8436-4cb1-9ae9-4f74bb2e2520\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"Canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"14.04.1-LTS\",\r\n        \"version\": \"14.04.201409090\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli9633d3eca0dc8f90-os-1470949325819\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstdockssh1343.blob.core.windows.net/xplatscntdockssh285/cli9633d3eca0dc8f90-os-1470949325819.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmdockssh\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjjCCAXqgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNjA4MTEyMDUyMDVa\\r\\nGA8yMDI2MDgxMTIwNTIwNVowGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEi\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQClAWOFZrK9hVoJ+CYdsAyHeHXt\\r\\nurvCFm9UZ+HU1rHeYNNFAaQvBXdZnFYrTPosFMkkhuyY7/15Gq7Qe3z7DW+B8J4G\\r\\nDOXVlH6w1qHEznsfJJf8I2PpiqQnH1OpduOntN5rowWll0rf6HcKIO/+BV2rHilD\\r\\nOKHtXG0uZ9yavB2njAUnRNSacRS1v9PiaFH4toAG2pgxkHcK6jPbPTADD7DWyg3s\\r\\no9P8IaEwHXFO9AVryMDDxkA8eVnDqrBMWKbcRe9Kluwpxgzy4XlUYuWSHv4xFnEH\\r\\nKh/PbianbKbegarQZO7W1Ai+snKj6Hrs5bzUdS0Z0xOicLEvMvgF6UOyZW+zAgMB\\r\\nAAEwCQYHKoZIzj0EAQOCAQEAWmryk3P3M0DtozF6zpwIsueTYbUCvXuZ68bW4f59\\r\\n9vWlLG+pTw69r4f4XiCqrVbzjCwDWJf543Zx3tZ01IRqN5aM0DcMrwhKBIyTb98e\\r\\nTkahu9nxaj6oJHygaqTBIshScduAEOEv75nN9gdhd/m/5IsdDSbyV+9Wi+c6ZIAj\\r\\niFtm9sTtDCaWK93j4ZVyHM0zkVGZ48uEQcKFYJe1tuRfywpIHKoGZxe0ToTljefZ\\r\\n4gHzGGsJepfv8ao9fW11Rc7T0zSHQt89uIwbJsOxKhuaCLpALYn0HiR6D3/c5IRV\\r\\nGn2ZTAbSNfAuQe8BP638VOHfc0WgpAU9otVVpnSDzR7RoA==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Network/networkInterfaces/xplatnicdockssh\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstdockssh1343.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Extensions\",\r\n        \"type\": \"DockerExtension\",\r\n        \"typeHandlerVersion\": \"1.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"docker\":{\"port\":\"2376\"}},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh/extensions/DockerExtension\",\r\n      \"name\": \"DockerExtension\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh\",\r\n  \"name\": \"xplatvmdockssh\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3410',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'b812a1c6-782f-4849-9403-9e0fc318ecd4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': '8fc65c4c-9b39-4b4a-8cf4-f50aadb512fd',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T211020Z:8fc65c4c-9b39-4b4a-8cf4-f50aadb512fd',
  date: 'Thu, 11 Aug 2016 21:10:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"b1f1fe5a-8436-4cb1-9ae9-4f74bb2e2520\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"Canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"14.04.1-LTS\",\r\n        \"version\": \"14.04.201409090\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli9633d3eca0dc8f90-os-1470949325819\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstdockssh1343.blob.core.windows.net/xplatscntdockssh285/cli9633d3eca0dc8f90-os-1470949325819.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmdockssh\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjjCCAXqgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNjA4MTEyMDUyMDVa\\r\\nGA8yMDI2MDgxMTIwNTIwNVowGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEi\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQClAWOFZrK9hVoJ+CYdsAyHeHXt\\r\\nurvCFm9UZ+HU1rHeYNNFAaQvBXdZnFYrTPosFMkkhuyY7/15Gq7Qe3z7DW+B8J4G\\r\\nDOXVlH6w1qHEznsfJJf8I2PpiqQnH1OpduOntN5rowWll0rf6HcKIO/+BV2rHilD\\r\\nOKHtXG0uZ9yavB2njAUnRNSacRS1v9PiaFH4toAG2pgxkHcK6jPbPTADD7DWyg3s\\r\\no9P8IaEwHXFO9AVryMDDxkA8eVnDqrBMWKbcRe9Kluwpxgzy4XlUYuWSHv4xFnEH\\r\\nKh/PbianbKbegarQZO7W1Ai+snKj6Hrs5bzUdS0Z0xOicLEvMvgF6UOyZW+zAgMB\\r\\nAAEwCQYHKoZIzj0EAQOCAQEAWmryk3P3M0DtozF6zpwIsueTYbUCvXuZ68bW4f59\\r\\n9vWlLG+pTw69r4f4XiCqrVbzjCwDWJf543Zx3tZ01IRqN5aM0DcMrwhKBIyTb98e\\r\\nTkahu9nxaj6oJHygaqTBIshScduAEOEv75nN9gdhd/m/5IsdDSbyV+9Wi+c6ZIAj\\r\\niFtm9sTtDCaWK93j4ZVyHM0zkVGZ48uEQcKFYJe1tuRfywpIHKoGZxe0ToTljefZ\\r\\n4gHzGGsJepfv8ao9fW11Rc7T0zSHQt89uIwbJsOxKhuaCLpALYn0HiR6D3/c5IRV\\r\\nGn2ZTAbSNfAuQe8BP638VOHfc0WgpAU9otVVpnSDzR7RoA==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Network/networkInterfaces/xplatnicdockssh\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstdockssh1343.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Extensions\",\r\n        \"type\": \"DockerExtension\",\r\n        \"typeHandlerVersion\": \"1.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"docker\":{\"port\":\"2376\"}},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh/extensions/DockerExtension\",\r\n      \"name\": \"DockerExtension\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh\",\r\n  \"name\": \"xplatvmdockssh\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3410',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'b812a1c6-782f-4849-9403-9e0fc318ecd4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': '8fc65c4c-9b39-4b4a-8cf4-f50aadb512fd',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T211020Z:8fc65c4c-9b39-4b4a-8cf4-f50aadb512fd',
  date: 'Thu, 11 Aug 2016 21:10:20 GMT',
  connection: 'close' });
 return result; }]];