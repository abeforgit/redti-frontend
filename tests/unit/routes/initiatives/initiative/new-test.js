import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | initiatives/initiative/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:initiatives/initiative/new');
    assert.ok(route);
  });
});
