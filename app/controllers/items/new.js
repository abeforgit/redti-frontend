import { tracked } from "@glimmer/tracking";
import { task } from "ember-concurrency";
import { action } from "@ember/object";
import Controller from "@ember/controller";
import { ItemValidation } from "redti-front/models/item";
/**
 * @typedef {import("ember-changeset/types").BufferedChangeset} BufferedChangeset
 */

export default class ItemsNewController extends Controller {
  queryParams = ["container"];
  @tracked
  container = false;
  newItemValidation = ItemValidation;

  @action
  goBack() {
    history.back();
  }

  @task(
    /**
     * @param {BufferedChangeset} changeSet
     * @this {ItemsNewController}
     */
    function* (changeSet) {
      if (this.container) {
        changeSet.set("container", true);
      }
      yield changeSet.save();
      this.goBack();
    }
  )
  addItem;
}
