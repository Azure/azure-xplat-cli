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

'use strict';

var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');
var fs = require('fs');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var log = cli.output;
  var withProgress = cli.interaction.withProgress.bind(cli.interaction);

  var policy = cli.category('policy');
  var definition = policy.category('definition')
      .description($('Commands to manage your policy definitions.'));

  definition.command('create [name] [policy]')
    .description($('Creates a new policy definition'))
    .usage('[options] <name> <policy>')
    .option('-n --name <name>', $('the policy definition name'))
    .fileRelatedOption('-p --policy <policy>', $('the rule for policy definition. This should be a path to a file name containing the rule.'))
    .option('--policy-string <policyString>', $('the rule for policy definition as a string.'))
    .option('-d --display-name <display-name>', $('the display name for policy definition.'))
    .option('--description <description>', $('the description for policy definition.'))
    .option('--subscription <subscription>', $('the subscription identifier'))
    .execute(function (name, policy, options, _) {
      if (!name) {
        return cli.missingArgument('name');
      }
      if (!policy && !options.policyString) {
        throw new Error('Please specify one of the required parameters: --policy or --policy-string.');
      }

      if (policy && options.policyString) {
        throw new Error('Please specify either --policy or --policy-string, not both.');
      }

      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createPolicyClient(subscription);
      var policyContent = policy ? JSON.parse(utils.stripBOM(fs.readFileSync(policy))) : JSON.parse(options.policyString);
      
      var policyDefinitionParameters = {
        policyRule: policyContent
      };

      if (options.displayName) {
        policyDefinitionParameters.displayName = options.displayName;
      }
      if (options.description) {
        policyDefinitionParameters.description = options.description;
      }

      var policyDefinition = null;
      try {
        policyDefinition = withProgress(util.format($('Creating policy definition %s'), name),
        function (log, _) {
          return client.policyDefinitions.createOrUpdate(name, policyDefinitionParameters, _);
        }, _);
      } catch (ex) {
          throw new Error(util.format($('Policy definition creation failed: %s'), ex));
      }

      cli.interaction.formatOutput(policyDefinition, function (data) {
        if (data) {
          displayAPolicyDefinition(data, log);
        }
      });
    });

  definition.command('list')
    .description($('Lists all the policy definitions in the subscription.'))
    .option('--subscription <subscription>', $('the subscription identifier'))
    .execute(function (options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createPolicyClient(subscription);
      
      var policyDefinitions = null;
      try {
        policyDefinitions = withProgress($('Listing all policy definitions'),
        function (log, _) {
          return client.policyDefinitions.list(null, _);
        }, _);
      } catch (ex) {
        throw new Error(util.format($('Policy definition list failed: %s'), ex));
      }

      cli.interaction.formatOutput(policyDefinitions, function (data) {
        if (data) {
          for (var i = 0; i < data.length; i++) {
            displayAPolicyDefinition(data[i], log);
            log.data('');
          }
        }
      });
    });

  definition.command('show [name]')
    .description($('Shows a policy definition'))
    .usage('[options] <name>')
    .option('-n --name <name>', $('the policy definition name'))
    .option('--subscription <subscription>', $('the subscription identifier'))
    .execute(function (name, options, _) {
      if (!name) {
        return cli.missingArgument('name');
      }
      
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createPolicyClient(subscription);

      var policyDefinition = null;
      try {
        policyDefinition = withProgress(util.format($('Getting policy definition %s'), name),
        function (log, _) {
          return client.policyDefinitions.get(name, null, _);
        }, _);
      } catch (ex) {
        throw new Error(util.format($('Policy definition get failed: %s'), ex));
      }

      cli.interaction.formatOutput(policyDefinition, function (data) {
        if (data) {
          displayAPolicyDefinition(data, log);
        }
      });
    });

  definition.command('delete [name]')
    .description($('Deletes a policy definition'))
    .usage('[options] <name>')
    .option('-n --name <name>', $('the policy definition name'))
    .option('-q, --quiet', $('quiet mode (do not ask for delete confirmation)'))
    .option('--subscription <subscription>', $('the subscription identifier'))
    .execute(function (name, options, _) {
      if (!name) {
        return cli.missingArgument('name');
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete policy definition %s? [y/n] '), name), _)) {
        return;
      }

      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createPolicyClient(subscription);

      var progress = cli.interaction.progress(util.format($('Deleting policy definition %s'), name));
      try {
        client.policyDefinitions.deleteMethod(name, _);
      } finally {
        progress.end();
      }
    });

  function displayAPolicyDefinition(policyDefinition, log) {
    log.data($('PolicyName:    '), policyDefinition.name);
    log.data($('PolicyType:    '), policyDefinition.policyType);
    log.data($('DisplayName:   '), policyDefinition.displayName);
    log.data($('Description:   '), policyDefinition.description);
    log.data($('PolicyRule:    '), policyDefinition.policyRule);
  }

};


