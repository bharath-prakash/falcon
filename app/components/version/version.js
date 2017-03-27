'use strict';

angular.module('fleetmgntApp.version', [
  'fleetmgntApp.version.interpolate-filter',
  'fleetmgntApp.version.version-directive'
])

.value('version', '0.1');
