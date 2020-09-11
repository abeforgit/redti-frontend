import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";
import setupDb from "../../mirage/scenarios/shared";

module("Acceptance | mirage", function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  //do not change to lambda, we need the old school `this` behavior
  hooks.beforeEach(function () {
    setupDb(this.server);
  });

  test("visiting /items", async function (assert) {
    this.server.create("item", {
      name: "test1",
    });
    this.server.create("item", {
      name: "test2",
    });
    await visit("/items");

    assert.dom("[data-test-sidebar]").containsText("test1");
    assert.dom("[data-test-sidebar]").containsText("test2");
  });
});
