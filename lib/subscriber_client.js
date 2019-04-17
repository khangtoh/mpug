// Copyright 2019 Khang Toh
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
const merge = require('lodash.merge');
const path = require('path');
const VERSION = require('../../../package.json').version;

/**
 * The service that an application uses to manipulate subscriptions and to
 * consume messages from a subscription via the `Pull` method or by
 * establishing a bi-directional stream using the `StreamingPull` method.
 *
 * @class
 * @memberof v1
 */
class SubscriberClient {
  /**
   * Construct an instance of SubscriberClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {function} [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param {string} [options.db] - The mongodb host 
   *     if not default localhost:27017.
   */
  constructor(opts) {
    this._descriptors = {};

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        db: this.constructor.db,
      },
      opts
    );

    opts.scopes = this.constructor.scopes;
  }
  
}

module.exports = SubscriberClient;
