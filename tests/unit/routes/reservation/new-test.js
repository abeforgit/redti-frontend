import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | reservations/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:reservations/new');
    assert.ok(route);
  });
});
