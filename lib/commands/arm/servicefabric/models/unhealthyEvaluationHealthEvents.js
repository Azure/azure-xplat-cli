/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the UnhealthyEvaluationHealthEvents class.
 * @constructor
 * @member {object} [healthEvaluation]
 * 
 * @member {object} [healthEvaluation.healthEvents]
 * 
 * @member {number} [healthEvaluation.healthEvents.kind]
 * 
 * @member {string} [healthEvaluation.healthEvents.description]
 * 
 * @member {number} [healthEvaluation.healthEvents.aggregatedHealthState]
 * 
 * @member {object} [healthEvaluation.healthEvents.unhealthyEvent]
 * 
 * @member {string} [healthEvaluation.healthEvents.unhealthyEvent.sourceId]
 * 
 * @member {string} [healthEvaluation.healthEvents.unhealthyEvent.property]
 * 
 * @member {number} [healthEvaluation.healthEvents.unhealthyEvent.healthState]
 * 
 * @member {string}
 * [healthEvaluation.healthEvents.unhealthyEvent.timeToLiveInMilliSeconds]
 * 
 * @member {string} [healthEvaluation.healthEvents.unhealthyEvent.description]
 * 
 * @member {string}
 * [healthEvaluation.healthEvents.unhealthyEvent.sequenceNumber]
 * 
 * @member {boolean}
 * [healthEvaluation.healthEvents.unhealthyEvent.removeWhenExpired]
 * 
 * @member {string}
 * [healthEvaluation.healthEvents.unhealthyEvent.sourceUtcTimestamp]
 * 
 * @member {string}
 * [healthEvaluation.healthEvents.unhealthyEvent.lastModifiedUtcTimestamp]
 * 
 * @member {boolean} [healthEvaluation.healthEvents.unhealthyEvent.isExpired]
 * 
 * @member {string}
 * [healthEvaluation.healthEvents.unhealthyEvent.lastOkTransitionAt]
 * 
 * @member {string}
 * [healthEvaluation.healthEvents.unhealthyEvent.lastWarningTransitionAt]
 * 
 * @member {string}
 * [healthEvaluation.healthEvents.unhealthyEvent.lastErrorTransitionAt]
 * 
 */
function UnhealthyEvaluationHealthEvents(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.healthEvaluation) {
      this.healthEvaluation = new models['HealthEvaluation'](parameters.healthEvaluation);
    }
  }    
}


/**
 * Validate the payload against the UnhealthyEvaluationHealthEvents schema
 *
 * @param {JSON} payload
 *
 */
UnhealthyEvaluationHealthEvents.prototype.serialize = function () {
  var payload = {};
  if (this['healthEvaluation']) {
    payload['HealthEvaluation'] = this['healthEvaluation'].serialize();
  }

  return payload;
};

/**
 * Deserialize the instance to UnhealthyEvaluationHealthEvents schema
 *
 * @param {JSON} instance
 *
 */
UnhealthyEvaluationHealthEvents.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['HealthEvaluation']) {
      this['healthEvaluation'] = new models['HealthEvaluation']().deserialize(instance['HealthEvaluation']);
    }
  }

  return this;
};

module.exports = UnhealthyEvaluationHealthEvents;