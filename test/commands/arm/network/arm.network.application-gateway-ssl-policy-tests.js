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

var testPrefix = 'arm-network-application-gateway-ssl-policy-tests',
  groupName = 'xplat-test-ssl-policy',
  location;
var index = 0;

var sslPolicy = {
  disabledSslProtocols: 'TLSv1_0',
  disabledSslProtocolsNew: 'TLSv1_1',
  name: 'sslPolicyName'
};

sslPolicy.virtualNetworkName = 'virtualNetworkName';
sslPolicy.subnetName = 'subnetName';
sslPolicy.publicIPAddressName = 'publicIPAddressName';
sslPolicy.applicationGatewayName = 'applicationGatewayName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  addressPrefixNew: '10.0.0.0/24'
};
var virtualNetwork = {
  location: 'westus'
};
var applicationGateway = {
  backendAddresses: '10.0.0.0',
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
        location = sslPolicy.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        sslPolicy.location = location;
        sslPolicy.group = groupName;
        sslPolicy.name = suite.isMocked ? sslPolicy.name : suite.generateId(sslPolicy.name, null);
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
                  var cmd = 'network application-gateway create -g {1} -n applicationGatewayName --servers {backendAddresses} --location {location} --vnet-name virtualNetworkName --subnet-name subnetName --public-ip-name publicIPAddressName --json'.formatArgs(applicationGateway, groupName);
                  testUtils.executeCommand(suite, retry, cmd, function (result) {
                    result.exitStatus.should.equal(0);
                    var output = JSON.parse(result.text);
                    done();
                  });
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

    describe('ssl policy', function () {
      this.timeout(hour);
      it('create should create ssl policy', function (done) {
        var cmd = 'network application-gateway ssl-policy create -g {group} --disable-ssl-protocols {disabledSslProtocols} --gateway-name {applicationGatewayName}  --json'.formatArgs(sslPolicy);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          sslPolicy.disabledSslProtocols.split(',').forEach(function(item) { output.disabledSslProtocols.should.containEql(item) });
          done();
        });
      });
      it('show should display ssl policy details', function (done) {
        var cmd = 'network application-gateway ssl-policy show -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(sslPolicy);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          sslPolicy.disabledSslProtocols.split(',').forEach(function(item) { output.disabledSslProtocols.should.containEql(item) });
          done();
        });
      });
      it('set should update ssl policy', function (done) {
        var cmd = 'network application-gateway ssl-policy set -g {group} --disable-ssl-protocols {disabledSslProtocolsNew} --gateway-name {applicationGatewayName} --json'.formatArgs(sslPolicy);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          sslPolicy.disabledSslProtocolsNew.split(',').forEach(function(item) { output.disabledSslProtocols.should.containEql(item) });
          done();
        });
      });
      it('delete should delete ssl policy', function (done) {
        var cmd = 'network application-gateway ssl-policy delete -g {group} --quiet --gateway-name {applicationGatewayName} --json'.formatArgs(sslPolicy);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network application-gateway ssl-policy show -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(sslPolicy);
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
