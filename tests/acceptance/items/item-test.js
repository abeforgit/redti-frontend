import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";
import setupDb from "../../../mirage/scenarios/shared";

module("Acceptance | items/item", function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  //do not change to lambda, we need the old school `this` behavior
  hooks.beforeEach(function () {
    setupDb(this.server);
  });

  test("visiting /items/item should show child items in the sidebar", async function (assert) {
    let parent = this.server.create("item", { name: "parent" });
    this.server.create("item", { name: "child", parent });

    await visit(`/items/${parent.id}`);

    assert.dom("[data-test-sidebar]").containsText("parent");
    assert.dom("[data-test-sidebar]").containsText("child");

    assert.equal(currentURL(), `/items/${parent.id}`);
  });
});
