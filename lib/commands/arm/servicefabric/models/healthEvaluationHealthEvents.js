/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the HealthEvaluationHealthEvents class.
 * @constructor
 * @member {number} [kind]
 * 
 * @member {string} [description]
 * 
 * @member {number} [aggregatedHealthState]
 * 
 * @member {object} [unhealthyEvent]
 * 
 * @member {string} [unhealthyEvent.sourceId]
 * 
 * @member {string} [unhealthyEvent.property]
 * 
 * @member {number} [unhealthyEvent.healthState]
 * 
 * @member {string} [unhealthyEvent.timeToLiveInMilliSeconds]
 * 
 * @member {string} [unhealthyEvent.description]
 * 
 * @member {string} [unhealthyEvent.sequenceNumber]
 * 
 * @member {boolean} [unhealthyEvent.removeWhenExpired]
 * 
 * @member {string} [unhealthyEvent.sourceUtcTimestamp]
 * 
 * @member {string} [unhealthyEvent.lastModifiedUtcTimestamp]
 * 
 * @member {boolean} [unhealthyEvent.isExpired]
 * 
 * @member {string} [unhealthyEvent.lastOkTransitionAt]
 * 
 * @member {string} [unhealthyEvent.lastWarningTransitionAt]
 * 
 * @member {string} [unhealthyEvent.lastErrorTransitionAt]
 * 
 */
function HealthEvaluationHealthEvents(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.kind !== undefined) {
      this.kind = parameters.kind;
    }
    if (parameters.description !== undefined) {
      this.description = parameters.description;
    }
    if (parameters.aggregatedHealthState !== undefined) {
      this.aggregatedHealthState = parameters.aggregatedHealthState;
    }
    if (parameters.unhealthyEvent) {
      this.unhealthyEvent = new models['HealthEvent'](parameters.unhealthyEvent);
    }
  }    
}


/**
 * Validate the payload against the HealthEvaluationHealthEvents schema
 *
 * @param {JSON} payload
 *
 */
HealthEvaluationHealthEvents.prototype.serialize = function () {
  var payload = {};
  if (this['kind'] !== null && this['kind'] !== undefined) {
    if (typeof this['kind'] !== 'number') {
      throw new Error('this[\'kind\'] must be of type number.');
    }
    payload['Kind'] = this['kind'];
  }

  if (this['description'] !== null && this['description'] !== undefined) {
    if (typeof this['description'].valueOf() !== 'string') {
      throw new Error('this[\'description\'] must be of type string.');
    }
    payload['Description'] = this['description'];
  }

  if (this['aggregatedHealthState'] !== null && this['aggregatedHealthState'] !== undefined) {
    if (typeof this['aggregatedHealthState'] !== 'number') {
      throw new Error('this[\'aggregatedHealthState\'] must be of type number.');
    }
    payload['AggregatedHealthState'] = this['aggregatedHealthState'];
  }

  if (this['unhealthyEvent']) {
    payload['UnhealthyEvent'] = this['unhealthyEvent'].serialize();
  }

  return payload;
};

/**
 * Deserialize the instance to HealthEvaluationHealthEvents schema
 *
 * @param {JSON} instance
 *
 */
HealthEvaluationHealthEvents.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['Kind'] !== undefined) {
      this['kind'] = instance['Kind'];
    }

    if (instance['Description'] !== undefined) {
      this['description'] = instance['Description'];
    }

    if (instance['AggregatedHealthState'] !== undefined) {
      this['aggregatedHealthState'] = instance['AggregatedHealthState'];
    }

    if (instance['UnhealthyEvent']) {
      this['unhealthyEvent'] = new models['HealthEvent']().deserialize(instance['UnhealthyEvent']);
    }
  }

  return this;
};

module.exports = HealthEvaluationHealthEvents;