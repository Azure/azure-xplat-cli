﻿/**
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

var should = require('should');
var util = require('util');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var networkUtil = new NetworkTestUtil();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-application-gateway-tests',
  groupName = 'xplat-test-application-gateway',
  location;
var index = 0;

var applicationGateways = {
  skuname: 'Standard_Small',
  skunameNew: 'WAF_Medium',
  skutier: 'Standard',
  skutierNew: 'WAF',
  skucapacity: '2',
  skucapacityNew: '3',
  password: 'pswd',
  sslCertificateName: 'test/data/sslCert.pfx',
  backendAddresses: '10.0.0.0',
  cookieBasedAffinity: 'Enabled',
  ruleType: 'Basic',
  location: 'westus',
  name: 'applicationGatewayName'
};

applicationGateways.virtualNetworkName = 'virtualNetworkName';
applicationGateways.subnetName = 'subnetName';
applicationGateways.publicIPAddressName = 'publicIPAddressName';
applicationGateways.applicationGatewayName = 'applicationGatewayName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  addressPrefixNew: '10.0.0.0/24'
};
var virtualNetwork = {
  location: 'westus'
};
var publicIPAddress = {
  location: 'westus'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      this.timeout(hour);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = applicationGateways.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        applicationGateways.location = location;
        applicationGateways.group = groupName;
        applicationGateways.name = suite.isMocked ? applicationGateways.name : suite.generateId(applicationGateways.name, null);
        if(!suite.isPlayback()) {
          networkUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n virtualNetworkName --location {location} --json'.formatArgs(virtualNetwork, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var output = JSON.parse(result.text);
              var cmd = 'network vnet subnet create -g {1} -n subnetName --address-prefix {addressPrefix} --vnet-name virtualNetworkName --json'.formatArgs(subnet, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                var cmd = 'network public-ip create -g {1} -n publicIPAddressName --location {location} --json'.formatArgs(publicIPAddress, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  var output = JSON.parse(result.text);
                  done();
                });
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('application gateways', function () {
      this.timeout(hour);
      it('create should create application gateways', function (done) {
        var cmd = 'network application-gateway create -g {group} -n {name} --sku-name {skuname} --sku-tier {skutier} --capacity {skucapacity} --cert-password {password} --cert-file {sslCertificateName} --servers {backendAddresses} --http-settings-cookie-based-affinity {cookieBasedAffinity} --routing-rule-type {ruleType} --location {location}  --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(applicationGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(applicationGateways.name);
          output.sku.name.toLowerCase().should.equal(applicationGateways.skuname.toLowerCase());
          output.sku.tier.toLowerCase().should.equal(applicationGateways.skutier.toLowerCase());
          output.sku.capacity.should.equal(parseInt(applicationGateways.skucapacity, 10));
          output.sslCertificates[index].name.toLowerCase().should.equal('cert01'.toLowerCase());
          applicationGateways.backendAddresses.split(',').forEach(function(item) { output.backendAddressPools[index].backendAddresses.should.containEql({ ipAddress : item }) });
          output.backendHttpSettingsCollection[index].cookieBasedAffinity.toLowerCase().should.equal(applicationGateways.cookieBasedAffinity.toLowerCase());
          output.requestRoutingRules[index].ruleType.toLowerCase().should.equal(applicationGateways.ruleType.toLowerCase());
          done();
        });
      });
      it('show should display application gateways details', function (done) {
        var cmd = 'network application-gateway show -g {group} -n {name} --json'.formatArgs(applicationGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(applicationGateways.name);
          output.sku.name.toLowerCase().should.equal(applicationGateways.skuname.toLowerCase());
          output.sku.tier.toLowerCase().should.equal(applicationGateways.skutier.toLowerCase());
          output.sku.capacity.should.equal(parseInt(applicationGateways.skucapacity, 10));
          output.sslCertificates[index].name.toLowerCase().should.equal('cert01'.toLowerCase());
          applicationGateways.backendAddresses.split(',').forEach(function(item) { output.backendAddressPools[index].backendAddresses.should.containEql({ ipAddress : item }) });
          output.backendHttpSettingsCollection[index].cookieBasedAffinity.toLowerCase().should.equal(applicationGateways.cookieBasedAffinity.toLowerCase());
          output.requestRoutingRules[index].ruleType.toLowerCase().should.equal(applicationGateways.ruleType.toLowerCase());
          done();
        });
      });
      it('set should update application gateways', function (done) {
        var cmd = 'network application-gateway set -g {group} -n {name} --sku-name {skunameNew} --sku-tier {skutierNew} --capacity {skucapacityNew} --json'.formatArgs(applicationGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(applicationGateways.name);
          output.sku.name.toLowerCase().should.equal(applicationGateways.skunameNew.toLowerCase());
          output.sku.tier.toLowerCase().should.equal(applicationGateways.skutierNew.toLowerCase());
          output.sku.capacity.should.equal(parseInt(applicationGateways.skucapacityNew, 10));
          done();
        });
      });
      it('list should display all application gateways in resource group', function (done) {
        var cmd = 'network application-gateway list -g {group} --json'.formatArgs(applicationGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === applicationGateways.name;
          }).should.be.true;
          done();
        });
      });
      it('backend-health should perform backend health operation successfully', function (done) {
        var cmd = 'network application-gateway backend-health show -g {group} --gateway-name {applicationGatewayName}  --json'.formatArgs(applicationGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('start should perform start operation successfully', function (done) {
        var cmd = 'network application-gateway start -g {group} -n {name}  --json'.formatArgs(applicationGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('stop should perform stop operation successfully', function (done) {
        var cmd = 'network application-gateway stop -g {group} -n {name}  --json'.formatArgs(applicationGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete application gateways', function (done) {
        var cmd = 'network application-gateway delete -g {group} -n {name} --quiet --json'.formatArgs(applicationGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network application-gateway show -g {group} -n {name} --json'.formatArgs(applicationGateways);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.should.be.empty;
            done();
          });
        });
      });
    });
  });
});
