/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var applicationGateways = network.category('application-gateway')
    .description($('Commands to manage application gateways'));
  var frontendIPConfigurations = applicationGateways.category('frontend-ip')
    .description($('Commands to manage frontend ip configurations'));

  frontendIPConfigurations.command('create [resource-group] [gateway-name] [name]')
    .description($('Create a frontend ip configurations'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the frontend ip configuration'))
    .option('-a, --static-ip-address [static-ip-address]', $('privateIPAddress of the network' +
      '\n     interface IP Configuration'))
    .option('-u, --subnet-name [subnet-name]', $('sets subnet. This option is mutually' +
      '\n     exclusive with --subnet-id'))
    .option('-e, --vnet-name [vnet-name]', $('name of the virtual network that contains subnet'))
    .option('-i, --subnet-id [subnet-id]', $('sets subnet. This option is mutually' +
      '\n     exclusive with --subnet-name'))
    .option('-p, --public-ip-name [public-ip-name]', $('sets public ip address. This option is' +
      '\n     mutually exclusive with --public-ip-id'))
    .option('-r, --public-ip-id [public-ip-id]', $('sets public ip address. This option is' +
      '\n     mutually exclusive with --public-ip-name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);


      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var index = 0;
      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        result = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (!result) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }
      if(utils.findFirstCaseIgnore(result.frontendIPConfigurations, {name: name})) {
        throw new Error(util.format($('frontend ip configurations with name "%s" already exists in the "%s"'), name, gatewayName));
      }
      var parameters = {};
      if(!parameters.frontendIPConfigurations) {
        parameters.frontendIPConfigurations = [];
      }
      if(!parameters.frontendIPConfigurations[index]) {
        parameters.frontendIPConfigurations[index] = {};
      }
      if(options.staticIpAddress) {
        parameters.frontendIPConfigurations[index].privateIPAddress = options.staticIpAddress;
        if (!options.privateIpVersion || (options.privateIpVersion && options.privateIpVersion.toLowerCase() != 'ipv6')) {
          parameters.frontendIPConfigurations[index].privateIPAllocationMethod = 'Static';
        }
      }
      if(!parameters.frontendIPConfigurations[index].subnet) {
        parameters.frontendIPConfigurations[index].subnet = {};
      }
      if(options.subnetId) {
        if(options.subnetName) {
          cli.output.warn($('--subnet-name parameter will be ignored because --subnet-id and --subnet-name are mutually exclusive'));
        }
        parameters.frontendIPConfigurations[index].subnet.id = options.subnetId;
      } else if(options.subnetName) {
        var idContainersubnet = networkManagementClient.subnets.get(resourceGroup, options.vnetName, options.subnetName, _);
        parameters.frontendIPConfigurations[index].subnet.id = idContainersubnet.id;
      }
      if(!parameters.frontendIPConfigurations[index].publicIPAddress) {
        parameters.frontendIPConfigurations[index].publicIPAddress = {};
      }
      if(options.publicIpId) {
        if(options.publicIpName) {
          cli.output.warn($('--public-ip-name parameter will be ignored because --public-ip-id and --public-ip-name are mutually exclusive'));
        }
        parameters.frontendIPConfigurations[index].publicIPAddress.id = options.publicIpId;
      } else if(options.publicIpName) {
        var idContainerpublicIPAddress = networkManagementClient.publicIPAddresses.get(resourceGroup, options.publicIpName, _);
        parameters.frontendIPConfigurations[index].publicIPAddress.id = idContainerpublicIPAddress.id;
      }

      parameters.frontendIPConfigurations[index].name = name;
      result.frontendIPConfigurations.push(parameters.frontendIPConfigurations[index]);
      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating frontend ip configurations in "%s"'), gatewayName));
      try {
        result = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, result, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });


  frontendIPConfigurations.command('set [resource-group] [gateway-name] [name]')
    .description($('Update a frontend ip configurations'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the frontend ip configuration'))
    .option('-a, --static-ip-address [static-ip-address]', $('privateIPAddress of the network' +
      '\n     interface IP Configuration'))
    .option('-u, --subnet-name [subnet-name]', $('sets subnet. This option is mutually' +
      '\n     exclusive with --subnet-id'))
    .option('-e, --vnet-name [vnet-name]', $('name of the virtual network that contains subnet'))
    .option('-i, --subnet-id [subnet-id]', $('sets subnet. This option is mutually' +
      '\n     exclusive with --subnet-name'))
    .option('-p, --public-ip-name [public-ip-name]', $('sets public ip address. This option is' +
      '\n     mutually exclusive with --public-ip-id'))
    .option('-r, --public-ip-id [public-ip-id]', $('sets public ip address. This option is' +
      '\n     mutually exclusive with --public-ip-name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);


      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        result = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (!result) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }
      var childResult = utils.findFirstCaseIgnore(result.frontendIPConfigurations, {name: name});
      var index = utils.indexOfCaseIgnore(result.frontendIPConfigurations, {name: name});
      if(!childResult) {
        throw new Error(util.format($('frontend ip configurations with name "%s" not found in the "%s"'), name, gatewayName));
      }
      var parameters = result;
      if(!parameters.frontendIPConfigurations) {
        parameters.frontendIPConfigurations = [];
      }
      if(!parameters.frontendIPConfigurations[index]) {
        parameters.frontendIPConfigurations[index] = {};
      }
      if(options.staticIpAddress) {
        parameters.frontendIPConfigurations[index].privateIPAddress = options.staticIpAddress;
        if (!options.privateIpVersion || (options.privateIpVersion && options.privateIpVersion.toLowerCase() != 'ipv6')) {
          parameters.frontendIPConfigurations[index].privateIPAllocationMethod = 'Static';
        }
      }
      if(!parameters.frontendIPConfigurations[index].subnet) {
        parameters.frontendIPConfigurations[index].subnet = {};
      }
      if(options.subnetId) {
        if(options.subnetName) {
          cli.output.warn($('--subnet-name parameter will be ignored because --subnet-id and --subnet-name are mutually exclusive'));
        }
        parameters.frontendIPConfigurations[index].subnet.id = options.subnetId;
      } else if(options.subnetName) {
        var idContainersubnet = networkManagementClient.subnets.get(resourceGroup, options.vnetName, options.subnetName, _);
        parameters.frontendIPConfigurations[index].subnet.id = idContainersubnet.id;
      }
      if(!parameters.frontendIPConfigurations[index].publicIPAddress) {
        parameters.frontendIPConfigurations[index].publicIPAddress = {};
      }
      if(options.publicIpId) {
        if(options.publicIpName) {
          cli.output.warn($('--public-ip-name parameter will be ignored because --public-ip-id and --public-ip-name are mutually exclusive'));
        }
        parameters.frontendIPConfigurations[index].publicIPAddress.id = options.publicIpId;
      } else if(options.publicIpName) {
        var idContainerpublicIPAddress = networkManagementClient.publicIPAddresses.get(resourceGroup, options.publicIpName, _);
        parameters.frontendIPConfigurations[index].publicIPAddress.id = idContainerpublicIPAddress.id;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating frontend ip configurations in "%s"'), gatewayName));
      try {
        result = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, result, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });


  frontendIPConfigurations.command('delete [resource-group] [gateway-name] [name]')
    .description($('Delete a frontend ip configurations'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the frontend ip configuration'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        result = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (!result) {
        throw new Error(util.format($('application gateway "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }
      var index = utils.indexOfCaseIgnore(result.frontendIPConfigurations, {name: name});
      if (index === -1) {
        throw new Error(util.format($('frontend ip configurations "%s" not found in the gatewayName "%s"'), name, result.name));
      }
      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete frontend ip configurations with name "%s" from "%s"? [y/n] '), name, gatewayName), _)) {
        return;
      }
      result.frontendIPConfigurations.splice(index, 1);
      progress = cli.interaction.progress('Deleting frontend ip configurations');
      try {
        result = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, result, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });


  frontendIPConfigurations.command('show [resource-group] [gateway-name] [name]')
    .description($('Show a frontend ip configurations'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the frontend ip configuration'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        result = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (!result) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }
      var childResult = utils.findFirstCaseIgnore(result.frontendIPConfigurations, {name: name});
      if(!childResult) {
        cli.output.warn(util.format($('frontend ip configurations with name "%s" not found in the gatewayName "%s"'), name, result.name));
      }
      cli.interaction.formatOutput(childResult, generatorUtils.traverse);
    });


  frontendIPConfigurations.command('list [resource-group] [gateway-name]')
    .description($('List frontend ip configurations'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var result = null;

      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        result = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if(!result) {
        throw new Error(util.format($('application gateways with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }
      var items = result.frontendIPConfigurations;
      cli.interaction.formatOutput(items, function(items) {
        if (items.length === 0) {
          cli.output.warn($('No frontend ip configurations found'));
        } else {
          cli.output.table(items, function (row, item) {
            row.cell($('Name'), item.name);
            var resInfo = resourceUtils.getResourceInformation(item.id);
            row.cell($('Resource group'), resInfo.resourceGroup);
            row.cell($('Provisioning state'), item.provisioningState);
          });
        }
      });
    });
};
