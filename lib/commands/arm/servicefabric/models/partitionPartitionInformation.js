/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PartitionPartitionInformation class.
 * @constructor
 * @member {number} [servicePartitionKind]
 * 
 * @member {string} [id]
 * 
 */
function PartitionPartitionInformation() {
}

/**
 * Defines the metadata of PartitionPartitionInformation
 *
 * @returns {object} metadata of PartitionPartitionInformation
 *
 */
PartitionPartitionInformation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Partition_PartitionInformation',
    type: {
      name: 'Composite',
      className: 'PartitionPartitionInformation',
      modelProperties: {
        servicePartitionKind: {
          required: false,
          serializedName: 'ServicePartitionKind',
          type: {
            name: 'Number'
          }
        },
        id: {
          required: false,
          serializedName: 'Id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PartitionPartitionInformation;