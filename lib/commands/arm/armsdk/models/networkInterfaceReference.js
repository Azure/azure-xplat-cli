/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Describes a network interface reference.
 *
 * @extends models['SubResource']
 */
class NetworkInterfaceReference extends models['SubResource'] {
  /**
   * Create a NetworkInterfaceReference.
   * @member {boolean} [primary] Specifies the primary network interface in
   * case the virtual machine has more than 1 network interface.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NetworkInterfaceReference
   *
   * @returns {object} metadata of NetworkInterfaceReference
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkInterfaceReference',
      type: {
        name: 'Composite',
        className: 'NetworkInterfaceReference',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          primary: {
            required: false,
            serializedName: 'properties.primary',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkInterfaceReference;