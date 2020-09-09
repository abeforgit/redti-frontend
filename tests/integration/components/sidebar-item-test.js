import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import sinon from "sinon";

module("Integration | Component | sidebar-item", function (hooks) {
  setupRenderingTest(hooks);
  hooks.afterEach(() => {
    sinon.restore();
  });

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let item = { id: "1", name: "test" };
    this.set("item", item);
    this.owner.lookup("service:router").isActive = sinon.fake.returns(true);
    await render(hbs`<SidebarItem @item={{item}}/>`);

    assert.dom("[data-test-marker]").hasClass("red");
    assert.ok(this.element.textContent.includes("test"));
  });
  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let item = { id: "1", name: "test" };
    this.set("item", item);
    this.owner.lookup("service:router").isActive = sinon.fake.returns(false);
    await render(hbs`<SidebarItem @item={{item}}/>`);

    assert.dom("[data-test-marker]").doesNotHaveClass("red");
    assert.ok(this.element.textContent.includes("test"));
  });
});
