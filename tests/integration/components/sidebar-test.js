import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import sinon from "sinon";

module("Integration | Component | sidebar", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let items = [
      { name: "test1", id: "1" },
      { name: "test2", id: "2" },
    ];
    this.set("items", items);
    this.owner.lookup("service:router").isActive = sinon.fake.returns(true);

    await render(hbs`<Sidebar @items={{items}}/>`);

    // Template block usage:
    await render(hbs`
      <Sidebar @items={{items}}/>
    `);

    assert.ok(this.element.textContent.includes("test1"));
    assert.ok(this.element.textContent.includes("test2"));
  });
});
