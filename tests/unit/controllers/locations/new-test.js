import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | locations/new', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:locations/new');
    assert.ok(controller);
  });
});
