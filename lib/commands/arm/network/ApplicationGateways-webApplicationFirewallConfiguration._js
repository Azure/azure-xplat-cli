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
  var webApplicationFirewallConfiguration = applicationGateways.category('waf-config')
    .description($('Commands to manage web application firewall configuration'));

  webApplicationFirewallConfiguration.command('create [resource-group] [gateway-name] [enable]')
    .description($('Create a web application firewall configuration'))
    .usage('[options] <resource-group> <gateway-name> <enable>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-e, --enable <enable>', $('whether the web application firewall is' +
      '\n     enabled or not'))
    .option('-m, --waf-mode [waf-mode]', $('web application firewall mode'))
    .option('-y, --rule-set-type [rule-set-type]', $('the type of the web application' +
      '\n     firewall rule set. Possible values are: \'OWASP\''))
    .option('-r, --rule-set-version [rule-set-version]', $('the version of the rule set type'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, enable, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      options.enable = cli.interaction.promptIfNotGiven($('enable : '), enable, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var parameters = {};
      if(!parameters.webApplicationFirewallConfiguration) {
        parameters.webApplicationFirewallConfiguration = {};
      }
      if(options.enable) {
        parameters.webApplicationFirewallConfiguration.enabled = utils.parseBool(options.enable);
      }

      if(options.wafMode) {
        parameters.webApplicationFirewallConfiguration.firewallMode = validation.isIn(options.wafMode, ['Detection', 'Prevention'], '--waf-mode');
      }

      if(options.ruleSetType) {
        parameters.webApplicationFirewallConfiguration.ruleSetType = options.ruleSetType;
      }

      if(options.ruleSetVersion) {
        parameters.webApplicationFirewallConfiguration.ruleSetVersion = options.ruleSetVersion;
      }

      applicationGateway.webApplicationFirewallConfiguration = parameters.webApplicationFirewallConfiguration;

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating web application firewall configuration in "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(applicationGateway.webApplicationFirewallConfiguration, generatorUtils.traverse);
    });

  webApplicationFirewallConfiguration.command('set [resource-group] [gateway-name]')
    .description($('Update a web application firewall configuration'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-e, --enable [enable]', $('whether the web application firewall is' +
      '\n     enabled or not'))
    .option('-m, --waf-mode [waf-mode]', $('web application firewall mode'))
    .option('-y, --rule-set-type [rule-set-type]', $('the type of the web application' +
      '\n     firewall rule set. Possible values are: \'OWASP\''))
    .option('-r, --rule-set-version [rule-set-version]', $('the version of the rule set type'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var webApplicationFirewallConfiguration = applicationGateway.webApplicationFirewallConfiguration;
      if(!webApplicationFirewallConfiguration) {
        throw new Error(util.format($('web application firewall configuration not found in the "%s"'), gatewayName));
      }
      var parameters = applicationGateway;
      if(!parameters.webApplicationFirewallConfiguration) {
        parameters.webApplicationFirewallConfiguration = {};
      }
      if(options.enable) {
        parameters.webApplicationFirewallConfiguration.enabled = utils.parseBool(options.enable);
      }

      if(options.wafMode) {
        parameters.webApplicationFirewallConfiguration.firewallMode = validation.isIn(options.wafMode, ['Detection', 'Prevention'], '--waf-mode');
      }

      if(options.ruleSetType) {
        parameters.webApplicationFirewallConfiguration.ruleSetType = options.ruleSetType;
      }

      if(options.ruleSetVersion) {
        parameters.webApplicationFirewallConfiguration.ruleSetVersion = options.ruleSetVersion;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating web application firewall configuration in "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(applicationGateway.webApplicationFirewallConfiguration, generatorUtils.traverse);
    });

  webApplicationFirewallConfiguration.command('delete [resource-group] [gateway-name]')
    .description($('Delete a web application firewall configuration'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }


      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete web application firewall configuration from "%s"? [y/n] '), gatewayName), _)) {
        return;
      }

      delete applicationGateway.webApplicationFirewallConfiguration;
      progress = cli.interaction.progress('Deleting web application firewall configuration');
      try {
        applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
      } finally {
        progress.end();
      }
    });

  webApplicationFirewallConfiguration.command('show [resource-group] [gateway-name]')
    .description($('Show a web application firewall configuration'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var webApplicationFirewallConfiguration = applicationGateway.webApplicationFirewallConfiguration;
      if(!webApplicationFirewallConfiguration) {
        cli.output.warn(util.format($('web application firewall configuration not found in the "%s"'), applicationGateway.name));
      }

      cli.interaction.formatOutput(webApplicationFirewallConfiguration, generatorUtils.traverse);
    });

  webApplicationFirewallConfiguration.command('list [resource-group] [gateway-name]')
    .description($('List web application firewall configuration'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway = null;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if(!applicationGateway) {
        throw new Error(util.format($('application gateways with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var items = applicationGateway.webApplicationFirewallConfiguration;
      cli.interaction.formatOutput(items, function(items) {
        if (items.length === 0) {
          cli.output.warn($('No web application firewall configuration found'));
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
