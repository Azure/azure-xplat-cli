// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1692/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"c23e6c2d-3e8e-4332-b183-e9629d5cbeee\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1692/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL1795\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli1ba244937d05980b-os-1461627458940\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage14098.blob.core.windows.net/xplatteststoragecnt17010/cli1ba244937d05980b-os-1461627458940.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1692/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage14098.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.OSTCExtensions\",\r\n        \"type\": \"LinuxDiagnostic\",\r\n        \"typeHandlerVersion\": \"2.3\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjQwOTYiPjxEaWFnbm9zdGljSW5mcmFzdHJ1Y3R1cmVMb2dzIHNjaGVkdWxlZFRyYW5zZmVyUGVyaW9kPSJQVDFNIiBzY2hlZHVsZWRUcmFuc2ZlckxvZ0xldmVsRmlsdGVyPSJXYXJuaW5nIi8+PFBlcmZvcm1hbmNlQ291bnRlcnMgc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudFByb2Nlc3NvclRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHV0aWxpemF0aW9uIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudElkbGVUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBpZGxlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvclxQZXJjZW50UHJpdmlsZWdlZFRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHByaXZpbGVnZWQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnRJbnRlcnJ1cHRUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBpbnRlcnJ1cHQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnREUENUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBEUEMgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnRVc2VyVGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJDUFUgdXNlciB0aW1lIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudE5pY2VUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBuaWNlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvclxQZXJjZW50SU9XYWl0VGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJDUFUgSU8gd2FpdCB0aW1lIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGVyY2VudFVzZWRNZW1vcnkiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IHVzZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxVc2VkTWVtb3J5IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgdXNlZCAoYnl0ZXMpIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGVyY2VudEF2YWlsYWJsZU1lbW9yeSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgYXZhaWxhYmxlIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcQXZhaWxhYmxlTWVtb3J5IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgYXZhaWxhYmxlIChieXRlcykiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxQZXJjZW50VXNlZEJ5Q2FjaGUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IGNhY2hlZCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XFBlcmNlbnRVc2VkU3dhcCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgc3dhcCB1c2VkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcVXNlZFN3YXAiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBzd2FwIHVzZWQgKGJ5dGVzKSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XEF2YWlsYWJsZVN3YXAiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBzd2FwIGF2YWlsYWJsZSAoYnl0ZXMpIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGFnZXNQZXJTZWMiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBwYWdlcyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XFBhZ2VzUmVhZFBlclNlYyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50UGVyU2Vjb25kIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IHBhZ2UgcmVhZHMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxQYWdlc1dyaXR0ZW5QZXJTZWMiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBwYWdlIHdyaXRlcyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXEF2ZXJhZ2VUcmFuc2ZlclRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJTZWNvbmRzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhY3RpdmUgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXEF2ZXJhZ2VSZWFkVGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlNlY29uZHMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIGFjdGl2ZSByZWFkIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xBdmVyYWdlV3JpdGVUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iU2Vjb25kcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgYWN0aXZlIHdyaXRlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xUcmFuc2ZlcnNQZXJTZWNvbmQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgb3BlcmF0aW9ucyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXFJlYWRzUGVyU2Vjb25kIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnRQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHJlYWQgb3BlcmF0aW9ucyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXFdyaXRlc1BlclNlY29uZCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50UGVyU2Vjb25kIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayB3cml0ZSBvcGVyYXRpb25zIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2tcQnl0ZXNQZXJTZWNvbmQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlc1BlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgc3BlZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xXcml0ZUJ5dGVzUGVyU2Vjb25kIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXNQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHdyaXRlIHNwZWVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2tcQXZlcmFnZURpc2tRdWV1ZUxlbmd0aCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhdmVyYWdlIHF1ZXVlIGxlbmd0aCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxCeXRlc1RvdGFsIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGJ5dGVzIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxOZXR3b3JrSW50ZXJmYWNlXEJ5dGVzVHJhbnNtaXR0ZWQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik5ldHdvcmsgYnl0ZXMgc2VudCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxCeXRlc1JlY2VpdmVkIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGJ5dGVzIHJlY2VpdmVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxOZXR3b3JrSW50ZXJmYWNlXFBhY2tldHNUcmFuc21pdHRlZCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTmV0d29yayBwYWNrZXRzIHNlbnQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcUGFja2V0c1JlY2VpdmVkIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIHBhY2tldHMgcmVjZWl2ZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcVG90YWxSeEVycm9ycyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTmV0d29yayBwYWNrZXRzIHJlY2VpdmVkIGVycm9ycyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxUb3RhbFR4RXJyb3JzIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIHBhY2tldHMgc2VudCBlcnJvcnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcVG90YWxDb2xsaXNpb25zIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGNvbGxpc2lvbnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PC9QZXJmb3JtYW5jZUNvdW50ZXJzPjxNZXRyaWNzIHJlc291cmNlSWQ9Ii9zdWJzY3JpcHRpb25zL2UzM2YzNjFiLTUzYzItNGNjNy1iODI5LTc4OTA2NzA4Mzg3Yi9yZXNvdXJjZUdyb3Vwcy94cGxhdFRlc3RHVk1DcmVhdGUxNjkyL3Byb3ZpZGVycy9NaWNyb3NvZnQuQ29tcHV0ZS92aXJ0dWFsTWFjaGluZXMveHBsYXR2bSI+PE1ldHJpY0FnZ3JlZ2F0aW9uIHNjaGVkdWxlZFRyYW5zZmVyUGVyaW9kPSJQVDFIIi8+PE1ldHJpY0FnZ3JlZ2F0aW9uIHNjaGVkdWxlZFRyYW5zZmVyUGVyaW9kPSJQVDFNIi8+PC9NZXRyaWNzPjwvRGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uPjwvV2FkQ2ZnPg==\",\"storageAccount\":\"xplatteststorage14098\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1692/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic\",\r\n      \"name\": \"LinuxDiagnostic\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1692/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '15063',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '600ff6c2-8d37-4cff-b04b-8229a1361e48',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '8cdbbfb3-aa9d-4eae-9353-a7c1167ce500',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T235415Z:8cdbbfb3-aa9d-4eae-9353-a7c1167ce500',
  date: 'Mon, 25 Apr 2016 23:54:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1692/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"c23e6c2d-3e8e-4332-b183-e9629d5cbeee\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1692/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL1795\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli1ba244937d05980b-os-1461627458940\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage14098.blob.core.windows.net/xplatteststoragecnt17010/cli1ba244937d05980b-os-1461627458940.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1692/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage14098.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.OSTCExtensions\",\r\n        \"type\": \"LinuxDiagnostic\",\r\n        \"typeHandlerVersion\": \"2.3\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjQwOTYiPjxEaWFnbm9zdGljSW5mcmFzdHJ1Y3R1cmVMb2dzIHNjaGVkdWxlZFRyYW5zZmVyUGVyaW9kPSJQVDFNIiBzY2hlZHVsZWRUcmFuc2ZlckxvZ0xldmVsRmlsdGVyPSJXYXJuaW5nIi8+PFBlcmZvcm1hbmNlQ291bnRlcnMgc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudFByb2Nlc3NvclRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHV0aWxpemF0aW9uIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudElkbGVUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBpZGxlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvclxQZXJjZW50UHJpdmlsZWdlZFRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHByaXZpbGVnZWQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnRJbnRlcnJ1cHRUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBpbnRlcnJ1cHQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnREUENUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBEUEMgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnRVc2VyVGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJDUFUgdXNlciB0aW1lIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudE5pY2VUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBuaWNlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvclxQZXJjZW50SU9XYWl0VGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJDUFUgSU8gd2FpdCB0aW1lIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGVyY2VudFVzZWRNZW1vcnkiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IHVzZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxVc2VkTWVtb3J5IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgdXNlZCAoYnl0ZXMpIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGVyY2VudEF2YWlsYWJsZU1lbW9yeSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgYXZhaWxhYmxlIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcQXZhaWxhYmxlTWVtb3J5IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgYXZhaWxhYmxlIChieXRlcykiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxQZXJjZW50VXNlZEJ5Q2FjaGUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IGNhY2hlZCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XFBlcmNlbnRVc2VkU3dhcCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgc3dhcCB1c2VkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcVXNlZFN3YXAiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBzd2FwIHVzZWQgKGJ5dGVzKSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XEF2YWlsYWJsZVN3YXAiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBzd2FwIGF2YWlsYWJsZSAoYnl0ZXMpIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGFnZXNQZXJTZWMiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBwYWdlcyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XFBhZ2VzUmVhZFBlclNlYyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50UGVyU2Vjb25kIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IHBhZ2UgcmVhZHMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxQYWdlc1dyaXR0ZW5QZXJTZWMiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBwYWdlIHdyaXRlcyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXEF2ZXJhZ2VUcmFuc2ZlclRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJTZWNvbmRzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhY3RpdmUgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXEF2ZXJhZ2VSZWFkVGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlNlY29uZHMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIGFjdGl2ZSByZWFkIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xBdmVyYWdlV3JpdGVUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iU2Vjb25kcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgYWN0aXZlIHdyaXRlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xUcmFuc2ZlcnNQZXJTZWNvbmQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgb3BlcmF0aW9ucyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXFJlYWRzUGVyU2Vjb25kIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnRQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHJlYWQgb3BlcmF0aW9ucyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXFdyaXRlc1BlclNlY29uZCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50UGVyU2Vjb25kIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayB3cml0ZSBvcGVyYXRpb25zIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2tcQnl0ZXNQZXJTZWNvbmQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlc1BlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgc3BlZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xXcml0ZUJ5dGVzUGVyU2Vjb25kIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXNQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHdyaXRlIHNwZWVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2tcQXZlcmFnZURpc2tRdWV1ZUxlbmd0aCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhdmVyYWdlIHF1ZXVlIGxlbmd0aCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxCeXRlc1RvdGFsIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGJ5dGVzIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxOZXR3b3JrSW50ZXJmYWNlXEJ5dGVzVHJhbnNtaXR0ZWQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik5ldHdvcmsgYnl0ZXMgc2VudCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxCeXRlc1JlY2VpdmVkIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGJ5dGVzIHJlY2VpdmVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxOZXR3b3JrSW50ZXJmYWNlXFBhY2tldHNUcmFuc21pdHRlZCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTmV0d29yayBwYWNrZXRzIHNlbnQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcUGFja2V0c1JlY2VpdmVkIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIHBhY2tldHMgcmVjZWl2ZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcVG90YWxSeEVycm9ycyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTmV0d29yayBwYWNrZXRzIHJlY2VpdmVkIGVycm9ycyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxUb3RhbFR4RXJyb3JzIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIHBhY2tldHMgc2VudCBlcnJvcnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcVG90YWxDb2xsaXNpb25zIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGNvbGxpc2lvbnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PC9QZXJmb3JtYW5jZUNvdW50ZXJzPjxNZXRyaWNzIHJlc291cmNlSWQ9Ii9zdWJzY3JpcHRpb25zL2UzM2YzNjFiLTUzYzItNGNjNy1iODI5LTc4OTA2NzA4Mzg3Yi9yZXNvdXJjZUdyb3Vwcy94cGxhdFRlc3RHVk1DcmVhdGUxNjkyL3Byb3ZpZGVycy9NaWNyb3NvZnQuQ29tcHV0ZS92aXJ0dWFsTWFjaGluZXMveHBsYXR2bSI+PE1ldHJpY0FnZ3JlZ2F0aW9uIHNjaGVkdWxlZFRyYW5zZmVyUGVyaW9kPSJQVDFIIi8+PE1ldHJpY0FnZ3JlZ2F0aW9uIHNjaGVkdWxlZFRyYW5zZmVyUGVyaW9kPSJQVDFNIi8+PC9NZXRyaWNzPjwvRGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uPjwvV2FkQ2ZnPg==\",\"storageAccount\":\"xplatteststorage14098\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1692/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic\",\r\n      \"name\": \"LinuxDiagnostic\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate1692/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '15063',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '600ff6c2-8d37-4cff-b04b-8229a1361e48',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '8cdbbfb3-aa9d-4eae-9353-a7c1167ce500',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T235415Z:8cdbbfb3-aa9d-4eae-9353-a7c1167ce500',
  date: 'Mon, 25 Apr 2016 23:54:15 GMT',
  connection: 'close' });
 return result; }]];