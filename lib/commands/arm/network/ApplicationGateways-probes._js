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
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var applicationGateways = network.category('application-gateway')
    .description($('Commands to manage application gateways'));
  var probes = applicationGateways.category('probe')
    .description($('Commands to manage probes'));

  probes.command('create [resource-group] [gateway-name] [name]')
    .description($('Create a probes'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the probe'))
    .option('-p, --protocol [protocol]', $('protocol. Possible values are: \'Http\'' +
      '\n     and \'Https\''))
    .option('-d, --host-name <host-name>', $('host name to send the probe to'))
    .option('-f, --path <path>', $('relative path of probe. Valid path' +
      '\n     starts from \'/\'. Probe is sent to <Protocol>://<host>:<port><path>'))
    .option('-i, --interval [interval]', $('the probing interval in seconds. This' +
      '\n     is the time interval between two consecutive probes. Acceptable values are from' +
      '\n     1 second to 86400 seconds'))
    .option('-u, --timeout <timeout>', $('the probe timeout in seconds. Probe' +
      '\n     marked as failed if valid response is not received with this timeout period.' +
      '\n     Acceptable values are from 1 second to 86400 seconds'))
    .option('-e, --unhealthy-threshold [unhealthy-threshold]', $('the probe retry count. Backend server' +
      '\n     is marked down after consecutive probe failure count reaches' +
      '\n     UnhealthyThreshold. Acceptable values are from 1 second to 20'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name/*, host, path, timeout*/, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      // options.host = cli.interaction.promptIfNotGiven($('host : '), host, _);
      // options.path = cli.interaction.promptIfNotGiven($('path : '), path, _);
      // options.timeout = cli.interaction.promptIfNotGiven($('timeout : '), timeout, _);


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
      if(utils.findFirstCaseIgnore(result.probes, {name: name})) {
        throw new Error(util.format($('probes with name "%s" already exists in the "%s"'), name, gatewayName));
      }
      var parameters = {};
      if(!parameters.probes) {
        parameters.probes = [];
      }
      if(!parameters.probes[index]) {
        parameters.probes[index] = {};
      }
      if(options.protocol) {
        parameters.probes[index].protocol = validation.isIn(options.protocol, ['Http', 'Https'], '--protocol');
      }
      if(options.hostName) {
        parameters.probes[index].host = options.hostName;
      }
      if(options.path) {
        parameters.probes[index].path = options.path;
      }
      if(options.interval) {
        parameters.probes[index].interval = parseInt(options.interval, 10);
      }
      if(options.timeout) {
        parameters.probes[index].timeout = parseInt(options.timeout, 10);
      }
      if(options.unhealthyThreshold) {
        parameters.probes[index].unhealthyThreshold = parseInt(options.unhealthyThreshold, 10);
      }

      parameters.probes[index].name = name;
      result.probes.push(parameters.probes[index]);
      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating probes in "%s"'), gatewayName));
      try {
        result = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, result, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });


  probes.command('set [resource-group] [gateway-name] [name]')
    .description($('Update a probes'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the probe'))
    .option('-p, --protocol [protocol]', $('protocol. Possible values are: \'Http\'' +
      '\n     and \'Https\''))
    .option('-d, --host-name [host-name]', $('host name to send the probe to'))
    .option('-f, --path [path]', $('relative path of probe. Valid path' +
      '\n     starts from \'/\'. Probe is sent to <Protocol>://<host>:<port><path>'))
    .option('-i, --interval [interval]', $('the probing interval in seconds. This' +
      '\n     is the time interval between two consecutive probes. Acceptable values are from' +
      '\n     1 second to 86400 seconds'))
    .option('-u, --timeout [timeout]', $('the probe timeout in seconds. Probe' +
      '\n     marked as failed if valid response is not received with this timeout period.' +
      '\n     Acceptable values are from 1 second to 86400 seconds'))
    .option('-e, --unhealthy-threshold [unhealthy-threshold]', $('the probe retry count. Backend server' +
      '\n     is marked down after consecutive probe failure count reaches' +
      '\n     UnhealthyThreshold. Acceptable values are from 1 second to 20'))
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
      var childResult = utils.findFirstCaseIgnore(result.probes, {name: name});
      var index = utils.indexOfCaseIgnore(result.probes, {name: name});
      if(!childResult) {
        throw new Error(util.format($('probes with name "%s" not found in the "%s"'), name, gatewayName));
      }
      var parameters = result;
      if(!parameters.probes) {
        parameters.probes = [];
      }
      if(!parameters.probes[index]) {
        parameters.probes[index] = {};
      }
      if(options.protocol) {
        parameters.probes[index].protocol = validation.isIn(options.protocol, ['Http', 'Https'], '--protocol');
      }
      if(options.hostName) {
        parameters.probes[index].host = options.hostName;
      }
      if(options.path) {
        parameters.probes[index].path = options.path;
      }
      if(options.interval) {
        parameters.probes[index].interval = parseInt(options.interval, 10);
      }
      if(options.timeout) {
        parameters.probes[index].timeout = parseInt(options.timeout, 10);
      }
      if(options.unhealthyThreshold) {
        parameters.probes[index].unhealthyThreshold = parseInt(options.unhealthyThreshold, 10);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating probes in "%s"'), gatewayName));
      try {
        result = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, result, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });


  probes.command('delete [resource-group] [gateway-name] [name]')
    .description($('Delete a probes'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the probe'))
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
      var index = utils.indexOfCaseIgnore(result.probes, {name: name});
      if (index === -1) {
        throw new Error(util.format($('probes "%s" not found in the gatewayName "%s"'), name, result.name));
      }
      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete probes with name "%s" from "%s"? [y/n] '), name, gatewayName), _)) {
        return;
      }
      result.probes.splice(index, 1);
      progress = cli.interaction.progress('Deleting probes');
      try {
        result = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, result, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });


  probes.command('show [resource-group] [gateway-name] [name]')
    .description($('Show a probes'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the probe'))
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
      var childResult = utils.findFirstCaseIgnore(result.probes, {name: name});
      if(!childResult) {
        cli.output.warn(util.format($('probes with name "%s" not found in the gatewayName "%s"'), name, result.name));
      }
      cli.interaction.formatOutput(childResult, generatorUtils.traverse);
    });


  probes.command('list [resource-group] [gateway-name]')
    .description($('List probes'))
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
      var items = result.probes;
      cli.interaction.formatOutput(items, function(items) {
        if (items.length === 0) {
          cli.output.warn($('No probes found'));
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
