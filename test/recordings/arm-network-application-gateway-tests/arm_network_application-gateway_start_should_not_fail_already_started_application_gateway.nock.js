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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestAppGw\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw\",\r\n  \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d12880e5-b26f-436d-a9cf-943ace5a9c0a\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Medium\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 5\r\n    },\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.9\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"1.1.1.1\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Http\",\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '7419',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ae49a5e8-3518-42d7-9487-98331b1eb5bf"',
  'x-ms-request-id': 'b4425846-247b-47bf-929d-f33aaa8752d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c12cf15f-c03f-4c57-85e7-9bdf20770528',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T124114Z:c12cf15f-c03f-4c57-85e7-9bdf20770528',
  date: 'Wed, 16 Mar 2016 12:41:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestAppGw\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw\",\r\n  \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d12880e5-b26f-436d-a9cf-943ace5a9c0a\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Medium\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 5\r\n    },\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.9\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"1.1.1.1\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Http\",\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"ae49a5e8-3518-42d7-9487-98331b1eb5bf\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '7419',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ae49a5e8-3518-42d7-9487-98331b1eb5bf"',
  'x-ms-request-id': 'b4425846-247b-47bf-929d-f33aaa8752d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c12cf15f-c03f-4c57-85e7-9bdf20770528',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T124114Z:c12cf15f-c03f-4c57-85e7-9bdf20770528',
  date: 'Wed, 16 Mar 2016 12:41:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/start?api-version=2015-06-15')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/de47851a-5f5e-4922-a52f-cd24c486b295?api-version=2015-06-15',
  'x-ms-request-id': 'de47851a-5f5e-4922-a52f-cd24c486b295',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/de47851a-5f5e-4922-a52f-cd24c486b295?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e48f21ed-434b-4662-95d1-82f1c37e0292',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T124115Z:e48f21ed-434b-4662-95d1-82f1c37e0292',
  date: 'Wed, 16 Mar 2016 12:41:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/start?api-version=2015-06-15')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/de47851a-5f5e-4922-a52f-cd24c486b295?api-version=2015-06-15',
  'x-ms-request-id': 'de47851a-5f5e-4922-a52f-cd24c486b295',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/de47851a-5f5e-4922-a52f-cd24c486b295?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e48f21ed-434b-4662-95d1-82f1c37e0292',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T124115Z:e48f21ed-434b-4662-95d1-82f1c37e0292',
  date: 'Wed, 16 Mar 2016 12:41:15 GMT',
  connection: 'close' });
 return result; }]];