'use strict';

describe('fleetmgntApp.version module', function() {
  beforeEach(module('fleetmgntApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
