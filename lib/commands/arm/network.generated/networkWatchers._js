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
var tagUtils = require('../tag/tagUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var networkWatchers = network.category('watcher')
    .description($('Commands to manage network watchers'));

  networkWatchers.command('create [resource-group] [name] [location]')
    .description($('Create a network watcher'))
    .usage('[options] <resource-group> <name> <location>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-l, --location <location>', $('the location'))
    .option('-t, --tags [tags]', $('the list of tags.\n     Can be multiple. In the format of "name=value".\n     Name is required and value is optional.\n     For example, -t "tag1=value1;tag2"'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, location, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.location = cli.interaction.promptIfNotGiven($('location : '), location, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;
      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (networkWatcher) {
        throw new Error(util.format($('network watcher with name "%s" already exists in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = {};
      if(options.location) {
        parameters.location = options.location;
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });

  networkWatchers.command('delete [resource-group] [name]')
    .description($('Delete a network watcher'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;
      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        throw new Error(util.format($('network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete network watcher "%s"? [y/n] '), name), _)) {
        cli.output.info(util.format($('network watcher "%s" was not deleted and still exists in the resource group "%s"'), name, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.deleteMethod(resourceGroup, name, _);
        cli.output.info(util.format($('network watcher "%s" was successfully deleted from resource group "%s"'), name, resourceGroup));
      } finally {
        progress.end();
      }
    });

  networkWatchers.command('show [resource-group] [name]')
    .description($('Show a network watcher'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;
      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        cli.output.warn(util.format($('network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });

  networkWatchers.command('list [resource-group]')
    .description($('List network watchers'))
    .usage('[options] <resource-group>')
    .option('-g, --resource-group [resource-group]', $('the name of the resource group'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, options, _) {
      options.resourceGroup = resourceGroup;
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher = null;
      var progress;
      try {
        if(typeof networkManagementClient.networkWatchers.listAll != 'function') {
          resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
          progress = cli.interaction.progress($('Getting the network watchers'));
          networkWatcher = networkManagementClient.networkWatchers.list(resourceGroup,  _);
        } else {
          if(options.resourceGroup) {
            progress = cli.interaction.progress($('Getting the network watchers'));
            networkWatcher = networkManagementClient.networkWatchers.list(resourceGroup,  _);
          } else {
            progress = cli.interaction.progress($('Getting the network watchers'));
            networkWatcher = networkManagementClient.networkWatchers.listAll(_);
          }
        }
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, function(networkWatcher) {
        if (!networkWatcher || networkWatcher.length === 0) {
          cli.output.warn($('No network watchers found'));
        } else {
          cli.output.table(networkWatcher, function (row, item) {
            generatorUtils.showTableRow(row, item);
          });
        }
      });
    });

  networkWatchers.command('check-connectivity [resource-group] [name] [source-id]')
    .description($('Perform check connectivity operation on a network watcher'))
    .usage('[options] <resource-group> <name> <source-id>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-i, --source-id <source-id>', $('the ID of the resource from which a' +
      '\n     connectivity check will be initiated'))
    .option('-p, --source-port [source-port]', $('sets source port'))
    .option('-d, --destination-id [destination-id]', $('the ID of the resource to which a' +
      '\n     connection attempt will be made'))
    .option('-a, --destination-address [destination-address]', $('the IP address or URI the resource to' +
      '\n     which a connection attempt will be made'))
    .option('-o, --destination-port [destination-port]', $('sets destination port'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, sourceId, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.sourceId = cli.interaction.promptIfNotGiven($('source id : '), sourceId, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;

      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        throw new Error(util.format($('a network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      var parameters = {};
      if(!parameters.source) {
        parameters.source = {};
      }
      if(options.sourceId) {
        parameters.source.resourceId = options.sourceId;
      }

      if(options.sourcePort) {
        parameters.source.port = parseInt(options.sourcePort, 10);
      }

      if(!parameters.destination) {
        parameters.destination = {};
      }
      if(options.destinationId) {
        parameters.destination.resourceId = options.destinationId;
      }

      if(options.destinationAddress) {
        parameters.destination.address = options.destinationAddress;
      }

      if(options.destinationPort) {
        parameters.destination.port = parseInt(options.destinationPort, 10);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Performing check connectivity operation on a network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.checkConnectivity(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });

  networkWatchers.command('flow-log-status [resource-group] [name] [target]')
    .description($('Perform get flow log status operation on a network watcher'))
    .usage('[options] <resource-group> <name> <target>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-t, --target <target>', $('the target resource where getting the' +
      '\n     flow logging status'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, target, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.target = cli.interaction.promptIfNotGiven($('target : '), target, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;

      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        throw new Error(util.format($('a network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      var parameters = {};
      if(options.target) {
        parameters.targetResourceId = options.target;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Performing get flow log status operation on a network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.getFlowLogStatus(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });

  networkWatchers.command('next-hop [resource-group] [name] [target] [source-ip-address] [destination-ip-address]')
    .description($('Perform get next hop operation on a network watcher'))
    .usage('[options] <resource-group> <name> <target> <source-ip-address> <destination-ip-address>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-t, --target <target>', $('the resource identifier of the target' +
      '\n     resource against which the action is to be performed'))
    .option('-a, --source-ip-address <source-ip-address>', $('the source IP address'))
    .option('-d, --destination-ip-address <destination-ip-address>', $('the destination IP address'))
    .option('-i, --nic-id [nic-id]', $('the NIC ID. (If VM has multiple NICs' +
      '\n     and IP forwarding is enabled on any of the nics, then this parameter must be' +
      '\n     specified. Otherwise optional)'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, target, sourceIpAddress, destinationIpAddress, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.target = cli.interaction.promptIfNotGiven($('target : '), target, _);
      options.sourceIpAddress = cli.interaction.promptIfNotGiven($('source ip address : '), sourceIpAddress, _);
      options.destinationIpAddress = cli.interaction.promptIfNotGiven($('destination ip address : '), destinationIpAddress, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;

      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        throw new Error(util.format($('a network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      var parameters = {};
      if(options.target) {
        parameters.targetResourceId = options.target;
      }

      if(options.sourceIpAddress) {
        parameters.sourceIPAddress = options.sourceIpAddress;
      }

      if(options.destinationIpAddress) {
        parameters.destinationIPAddress = options.destinationIpAddress;
      }

      if(options.nicId) {
        parameters.targetNicResourceId = options.nicId;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Performing get next hop operation on a network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.getNextHop(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });

  networkWatchers.command('topology [resource-group] [name] [topology-resource-group]')
    .description($('Perform get topology operation on a network watcher'))
    .usage('[options] <resource-group> <name> <topology-resource-group>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-r, --topology-resource-group <topology-resource-group>', $('the name of the target resource group' +
      '\n     to perform topology on'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, topologyResourceGroup, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.topologyResourceGroup = cli.interaction.promptIfNotGiven($('topology resource group : '), topologyResourceGroup, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;

      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        throw new Error(util.format($('a network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      var parameters = {};
      if(options.topologyResourceGroup) {
        parameters.targetResourceGroupName = options.topologyResourceGroup;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Performing get topology operation on a network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.getTopology(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });

  networkWatchers.command('troubleshoot [resource-group] [name] [target] [storage-id] [storage-path]')
    .description($('Perform get troubleshooting operation on a network watcher'))
    .usage('[options] <resource-group> <name> <target> <storage-id> <storage-path>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-t, --target <target>', $('the target resource to troubleshoot'))
    .option('-i, --storage-id <storage-id>', $('the ID for the storage account to save' +
      '\n     the troubleshoot result'))
    .option('-p, --storage-path <storage-path>', $('the path to the blob to save the' +
      '\n     troubleshoot result in'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, target, storageId, storagePath, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.target = cli.interaction.promptIfNotGiven($('target : '), target, _);
      options.storageId = cli.interaction.promptIfNotGiven($('storage id : '), storageId, _);
      options.storagePath = cli.interaction.promptIfNotGiven($('storage path : '), storagePath, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;

      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        throw new Error(util.format($('a network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      var parameters = {};
      if(options.target) {
        parameters.targetResourceId = options.target;
      }

      if(options.storageId) {
        parameters.storageId = options.storageId;
      }

      if(options.storagePath) {
        parameters.storagePath = options.storagePath;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Performing get troubleshooting operation on a network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.getTroubleshooting(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });

  networkWatchers.command('troubleshoot-result [resource-group] [name] [target]')
    .description($('Perform get troubleshooting result operation on a network watcher'))
    .usage('[options] <resource-group> <name> <target>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-t, --target <target>', $('the target resource ID to query the' +
      '\n     troubleshooting result'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, target, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.target = cli.interaction.promptIfNotGiven($('target : '), target, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;

      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        throw new Error(util.format($('a network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      var parameters = {};
      if(options.target) {
        parameters.targetResourceId = options.target;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Performing get troubleshooting result operation on a network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.getTroubleshootingResult(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });

  networkWatchers.command('security-group-view [resource-group] [name] [target]')
    .description($('Perform get vm security rules operation on a network watcher'))
    .usage('[options] <resource-group> <name> <target>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-t, --target <target>', $('id of the target VM'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, target, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.target = cli.interaction.promptIfNotGiven($('target : '), target, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;

      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        throw new Error(util.format($('a network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      var parameters = {};
      if(options.target) {
        parameters.targetResourceId = options.target;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Performing get vm security rules operation on a network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.getVMSecurityRules(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });

  networkWatchers.command('configure-flow-log [resource-group] [name] [target] [storage-id] [enable]')
    .description($('Perform set flow log configuration operation on a network watcher'))
    .usage('[options] <resource-group> <name> <target> <storage-id> <enable>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-t, --target <target>', $('the target resource where getting the' +
      '\n     flow logging status'))
    .option('-i, --storage-id <storage-id>', $('id of the storage account which is used' +
      '\n     to store the flow log'))
    .option('-e, --enable <enable>', $('flag to enable/disable flow logging'))
    .option('-d, --retention-days [retention-days]', $('number of days to retain flow log' +
      '\n     records'))
    .option('-r, --retention-enable [retention-enable]', $('flag to enable/disable retention'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, target, storageId, enable, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.target = cli.interaction.promptIfNotGiven($('target : '), target, _);
      options.storageId = cli.interaction.promptIfNotGiven($('storage id : '), storageId, _);
      options.enable = cli.interaction.promptIfNotGiven($('enable : '), enable, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;

      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        throw new Error(util.format($('a network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      var parameters = {};
      if(options.target) {
        parameters.targetResourceId = options.target;
      }

      if(options.storageId) {
        parameters.storageId = options.storageId;
      }

      if(options.enable) {
        parameters.enabled = utils.parseBool(options.enable);
      }

      if(!parameters.retentionPolicy) {
        parameters.retentionPolicy = {};
      }
      if(options.retentionDays) {
        parameters.retentionPolicy.days = parseInt(options.retentionDays, 10);
      }

      if(options.retentionEnable) {
        parameters.retentionPolicy.enabled = utils.parseBool(options.retentionEnable);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Performing set flow log configuration operation on a network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.setFlowLogConfiguration(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });

  networkWatchers.command('ip-flow-verify [resource-group] [name] [target] [direction] [protocol] [local-port] [remote-port] [local-ip-address] [remote-ip-address]')
    .description($('Perform verify ip flow operation on a network watcher'))
    .usage('[options] <resource-group> <name> <target> <direction> <protocol> <local-port> <remote-port> <local-ip-address> <remote-ip-address>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network watcher'))
    .option('-t, --target <target>', $('the ID of the target resource to' +
      '\n     perform next-hop on'))
    .option('-d, --direction <direction>', $('the direction of the packet represented' +
      '\n     as a 5-tuple'))
    .option('-p, --protocol <protocol>', $('protocol to be verified on'))
    .option('-o, --local-port <local-port>', $('the local port. Acceptable values are a' +
      '\n     single integer in the range (0-65535). Support for * for the source port, which' +
      '\n     depends on the direction'))
    .option('-m, --remote-port <remote-port>', $('the remote port. Acceptable values are' +
      '\n     a single integer in the range (0-65535). Support for * for the source port,' +
      '\n     which depends on the direction'))
    .option('-l, --local-ip-address <local-ip-address>', $('the local IP address. Acceptable values' +
      '\n     are valid IPv4 addresses'))
    .option('-r, --remote-ip-address <remote-ip-address>', $('the remote IP address. Acceptable' +
      '\n     values are valid IPv4 addresses'))
    .option('-i, --nic-id [nic-id]', $('the NIC ID. (If VM has multiple NICs' +
      '\n     and IP forwarding is enabled on any of them, then this parameter must be' +
      '\n     specified. Otherwise optional)'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, target, direction, protocol, localPort, remotePort, localIpAddress, remoteIpAddress, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.target = cli.interaction.promptIfNotGiven($('target : '), target, _);
      options.direction = cli.interaction.promptIfNotGiven($('direction : '), direction, _);
      options.protocol = cli.interaction.promptIfNotGiven($('protocol : '), protocol, _);
      options.localPort = cli.interaction.promptIfNotGiven($('local port : '), localPort, _);
      options.remotePort = cli.interaction.promptIfNotGiven($('remote port : '), remotePort, _);
      options.localIpAddress = cli.interaction.promptIfNotGiven($('local ip address : '), localIpAddress, _);
      options.remoteIpAddress = cli.interaction.promptIfNotGiven($('remote ip address : '), remoteIpAddress, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkWatcher;

      var progress = cli.interaction.progress(util.format($('Looking up the network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkWatcher = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkWatcher) {
        throw new Error(util.format($('a network watcher with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      var parameters = {};
      if(options.target) {
        parameters.targetResourceId = options.target;
      }

      if(options.direction) {
        parameters.direction = validation.isIn(options.direction, ['Inbound', 'Outbound'], '--direction');
      }

      if(options.protocol) {
        parameters.protocol = validation.isIn(options.protocol, ['TCP', 'UDP'], '--protocol');
      }

      if(options.localPort) {
        parameters.localPort = options.localPort;
      }

      if(options.remotePort) {
        parameters.remotePort = options.remotePort;
      }

      if(options.localIpAddress) {
        parameters.localIPAddress = options.localIpAddress;
      }

      if(options.remoteIpAddress) {
        parameters.remoteIPAddress = options.remoteIpAddress;
      }

      if(options.nicId) {
        parameters.targetNicResourceId = options.nicId;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Performing verify ip flow operation on a network watcher "%s"'), name));
      try {
        networkWatcher = networkManagementClient.networkWatchers.verifyIPFlow(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkWatcher, generatorUtils.traverse);
    });
};
