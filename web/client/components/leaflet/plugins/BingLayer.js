/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var Layers = require('../../../utils/leaflet/Layers');
var Bing = require('leaflet-plugins/layer/tile/Bing');

Layers.registerType('bing', (options) => {
    var key = options.apiKey || "AqTGBsziZHIJYYxgivLBf0hVdrAk9mWO5cQcb8Yux8sW5M8c8opEC2lZqKR1ZZXf";
    return new Bing(key,
        {
            subdomains: [0, 1, 2, 3],
            type: options.name,
            attribution: 'Bing',
            culture: ''
        }
    );
});
