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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"9608f7c8-db36-430a-9e7c-7e6963b2e33d\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"44ebab43-a707-466f-92e5-483fddcf7fdc\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"9608f7c8-db36-430a-9e7c-7e6963b2e33d\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ne4mnz2eydrujckbevqvd2ya4c.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1546',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9608f7c8-db36-430a-9e7c-7e6963b2e33d"',
  'x-ms-request-id': '75068bd5-d503-4e1b-aef2-aac5e765bc4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'd7be06a3-4f2b-46c7-9edd-e6d3013bdae4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135308Z:d7be06a3-4f2b-46c7-9edd-e6d3013bdae4',
  date: 'Fri, 07 Jul 2017 13:53:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"9608f7c8-db36-430a-9e7c-7e6963b2e33d\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"44ebab43-a707-466f-92e5-483fddcf7fdc\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"9608f7c8-db36-430a-9e7c-7e6963b2e33d\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ne4mnz2eydrujckbevqvd2ya4c.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1546',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9608f7c8-db36-430a-9e7c-7e6963b2e33d"',
  'x-ms-request-id': '75068bd5-d503-4e1b-aef2-aac5e765bc4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'd7be06a3-4f2b-46c7-9edd-e6d3013bdae4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135308Z:d7be06a3-4f2b-46c7-9edd-e6d3013bdae4',
  date: 'Fri, 07 Jul 2017 13:53:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"44ebab43-a707-466f-92e5-483fddcf7fdc\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"ipConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/ipConfigurationName\",\r\n        \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.13\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ne4mnz2eydrujckbevqvd2ya4c.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2355',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '60a6ea6b-42d5-4031-b154-355f799efc3b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/60a6ea6b-42d5-4031-b154-355f799efc3b?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '39c8fc94-9e98-4a47-af06-00605fd1f33d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135309Z:39c8fc94-9e98-4a47-af06-00605fd1f33d',
  date: 'Fri, 07 Jul 2017 13:53:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"44ebab43-a707-466f-92e5-483fddcf7fdc\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"ipConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/ipConfigurationName\",\r\n        \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.13\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ne4mnz2eydrujckbevqvd2ya4c.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2355',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '60a6ea6b-42d5-4031-b154-355f799efc3b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/60a6ea6b-42d5-4031-b154-355f799efc3b?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '39c8fc94-9e98-4a47-af06-00605fd1f33d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135309Z:39c8fc94-9e98-4a47-af06-00605fd1f33d',
  date: 'Fri, 07 Jul 2017 13:53:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"44ebab43-a707-466f-92e5-483fddcf7fdc\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"ipConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/ipConfigurationName\",\r\n        \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.13\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ne4mnz2eydrujckbevqvd2ya4c.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2355',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4b4cb445-456f-4325-98aa-6ec0b8bd2784"',
  'x-ms-request-id': '9191d425-df4b-4757-a510-e7b32d9bf106',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '37618269-21bf-4a2a-817f-d98d1adb55f8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135310Z:37618269-21bf-4a2a-817f-d98d1adb55f8',
  date: 'Fri, 07 Jul 2017 13:53:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"44ebab43-a707-466f-92e5-483fddcf7fdc\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"defaultConfig\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/defaultConfig\",\r\n        \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"ipConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/ipConfigurationName\",\r\n        \"etag\": \"W/\\\"4b4cb445-456f-4325-98aa-6ec0b8bd2784\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.13\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-ip-config/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ne4mnz2eydrujckbevqvd2ya4c.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2355',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4b4cb445-456f-4325-98aa-6ec0b8bd2784"',
  'x-ms-request-id': '9191d425-df4b-4757-a510-e7b32d9bf106',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '37618269-21bf-4a2a-817f-d98d1adb55f8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135310Z:37618269-21bf-4a2a-817f-d98d1adb55f8',
  date: 'Fri, 07 Jul 2017 13:53:10 GMT',
  connection: 'close' });
 return result; }]];