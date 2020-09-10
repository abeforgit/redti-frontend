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

  test("it is red  when selected", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let item = { id: "1", name: "test" };
    this.set("item", item);
    this.owner.lookup("service:router").isActive = sinon.fake.returns(true);
    await render(hbs`<SidebarItem @item={{item}}/>`);

    assert.dom("[data-test-sidebaritem-link]").hasClass("red");
    assert.ok(this.element.textContent.includes("test"));
  });
  test("it is not red when not selected", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let item = { id: "1", name: "test" };
    this.set("item", item);
    this.owner.lookup("service:router").isActive = sinon.fake.returns(false);
    await render(hbs`<SidebarItem @item={{item}}/>`);

    assert.dom("[data-test-sidebaritem-link]").doesNotHaveClass("red");
    assert.ok(this.element.textContent.includes("test"));
  });
});
