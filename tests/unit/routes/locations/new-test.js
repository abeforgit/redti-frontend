import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | locations/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:locations/new');
    assert.ok(route);
  });
});
