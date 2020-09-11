import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";
import setupDb from "../../mirage/scenarios/shared";

module("Acceptance | items", function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  //do not change to lambda, we need the old school `this` behavior
  hooks.beforeEach(function () {
    setupDb(this.server);
  });
  test("visiting /items should only show the toplevel containers", async function (assert) {
    let parent = this.server.create("item", { name: "parent" });
    this.server.create("item", { name: "child", parent });

    await visit("/items");
    assert.dom("[data-test-sidebar]").containsText("parent");
    assert.dom("[data-test-sidebar]").doesNotContainText("child");

    assert.equal(currentURL(), "/items");
  });
});
