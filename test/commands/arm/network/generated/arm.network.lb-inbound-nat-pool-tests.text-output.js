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

var CLITest = require('../../../../framework/arm-cli-test');
var utils = require('../../../../../lib/util/utils');
var tagUtils = require('../../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../../util/util');

var networkTestUtil = new (require('../../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../../lib/util/generatorUtils');
var profile = require('../../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-lb-inbound-nat-pool-tests-generated',
  groupName = 'xplat-test-inbound-nat-pool',
  location;
var index = 0;

var inboundNatPools = {
  protocol: 'Udp',
  protocolNew: 'Tcp',
  frontendPortRangeStart: '555',
  frontendPortRangeStartNew: '777',
  frontendPortRangeEnd: '999',
  frontendPortRangeEndNew: '888',
  backendPort: '987',
  backendPortNew: '789',
  name: 'inboundNatPoolName'
};

inboundNatPools.loadBalancerName = 'loadBalancerName';
inboundNatPools.publicIPAddressName = 'publicIPAddressName';
inboundNatPools.frontendIPConfigurationName = 'frontendIPConfigurationName';

var publicIPAddress = {
  location: 'westus',
  name: 'publicIPAddressName'
};

var loadBalancer = {
  location: 'westus',
  name: 'loadBalancerName'
};

var frontendIPConfiguration = {
  loadBalancerName: 'loadBalancerName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'frontendIPConfigurationName'
};

var inboundNatPoolsDefault = {
  protocol: 'TCP',
  frontendPortRangeStart: '1',
  frontendPortRangeEnd: '65534',
  backendPort: '80',
  loadBalancerName: 'loadBalancerName',
  publicIPAddressName: 'publicIPAddressName',
  name: 'inboundNatPoolsDefaultName',
  group: groupName
};

var frontendPortRangeStartUnderAllowedValue = {
  frontendPortRangeStart: '0',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortRangeStartUnderAllowedValueName'
};

var frontendPortRangeStartOverAllowedValue = {
  frontendPortRangeStart: '65535',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortRangeStartOverAllowedValueName'
};

var frontendPortRangeEndUnderAllowedValue = {
  frontendPortRangeEnd: '0',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortRangeEndUnderAllowedValueName'
};

var frontendPortRangeEndOverAllowedValue = {
  frontendPortRangeEnd: '65535',
  loadBalancerName: 'loadBalancerName',
  name: 'FrontendPortRangeEndOverAllowedValueName'
};

var backendPortOutOfRange = {
  backendPort: '65536',
  loadBalancerName: 'loadBalancerName',
  name: 'BackendPortOutOfRangeName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment, true);
      suite.isRecording = false;
      suite.setupSuite(function () {
        location = inboundNatPools.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        inboundNatPools.location = location;
        inboundNatPools.name = suite.isMocked ? inboundNatPools.name : suite.generateId(inboundNatPools.name, null);

        inboundNatPools.group = groupName;
        frontendPortRangeStartUnderAllowedValue.group = groupName;
        frontendPortRangeStartOverAllowedValue.group = groupName;
        frontendPortRangeEndUnderAllowedValue.group = groupName;
        frontendPortRangeEndOverAllowedValue.group = groupName;
        backendPortOutOfRange.group = groupName;

        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network lb create -g {1} -n {name} --location {location} --json'.formatArgs(loadBalancer, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var cmd = 'network public-ip create -g {1} -n {name} --location {location} --json'.formatArgs(publicIPAddress, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var cmd = 'network lb frontend-ip create -g {1} -n {name} --lb-name {loadBalancerName} --public-ip-name {publicIPAddressName} --json'.formatArgs(frontendIPConfiguration, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  done();
                });
              });
            });
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('inbound nat pools', function () {
      this.timeout(testTimeout);
      it('create should create inbound nat pools', function (done) {
        var cmd = 'network lb inbound-nat-pool create -g {group} -n {name} --protocol {protocol} --frontend-port-range-start {frontendPortRangeStart} --frontend-port-range-end {frontendPortRangeEnd} --backend-port {backendPort} --lb-name {loadBalancerName} --frontend-ip-name {frontendIPConfigurationName}'.formatArgs(inboundNatPools);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display inbound nat pools details', function (done) {
        var cmd = 'network lb inbound-nat-pool show -g {group} -n {name} --lb-name {loadBalancerName}'.formatArgs(inboundNatPools);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update inbound nat pools', function (done) {
        var cmd = 'network lb inbound-nat-pool set -g {group} -n {name} --protocol {protocolNew} --frontend-port-range-start {frontendPortRangeStartNew} --frontend-port-range-end {frontendPortRangeEndNew} --backend-port {backendPortNew} --lb-name {loadBalancerName}'.formatArgs(inboundNatPools);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all inbound nat pools in resource group', function (done) {
        var cmd = 'network lb inbound-nat-pool list -g {group} --lb-name {loadBalancerName}'.formatArgs(inboundNatPools);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete inbound nat pools', function (done) {
        var cmd = 'network lb inbound-nat-pool delete -g {group} -n {name} --lb-name {loadBalancerName} --quiet'.formatArgs(inboundNatPools);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network lb inbound-nat-pool show -g {group} -n {name} --lb-name {loadBalancerName}'.formatArgs(inboundNatPools);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create with defaults should create inbound nat pools with default values', function (done) {
        var cmd = 'network lb inbound-nat-pool create -g {group} -n {name} --lb-name {loadBalancerName}'.formatArgs(inboundNatPoolsDefault);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network lb inbound-nat-pool delete -g {group} -n {name} --lb-name {loadBalancerName} --quiet'.formatArgs(inboundNatPoolsDefault);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for frontend port range start under allowed value', function (done) {
        var cmd = 'network lb inbound-nat-pool create -g {group} -n {name} --frontend-port-range-start {frontendPortRangeStart} --lb-name {loadBalancerName} --json'.formatArgs(frontendPortRangeStartUnderAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port range start over allowed value', function (done) {
        var cmd = 'network lb inbound-nat-pool create -g {group} -n {name} --frontend-port-range-start {frontendPortRangeStart} --lb-name {loadBalancerName} --json'.formatArgs(frontendPortRangeStartOverAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port range end under allowed value', function (done) {
        var cmd = 'network lb inbound-nat-pool create -g {group} -n {name} --frontend-port-range-end {frontendPortRangeEnd} --lb-name {loadBalancerName} --json'.formatArgs(frontendPortRangeEndUnderAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for frontend port range end over allowed value', function (done) {
        var cmd = 'network lb inbound-nat-pool create -g {group} -n {name} --frontend-port-range-end {frontendPortRangeEnd} --lb-name {loadBalancerName} --json'.formatArgs(frontendPortRangeEndOverAllowedValue);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for backend port out of range', function (done) {
        var cmd = 'network lb inbound-nat-pool create -g {group} -n {name} --backend-port {backendPort} --lb-name {loadBalancerName} --json'.formatArgs(backendPortOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
    });
  });
});