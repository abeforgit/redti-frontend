import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | locations/location', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:locations/location');
    assert.ok(route);
  });
});
