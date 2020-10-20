import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
import {task} from "ember-concurrency";
import Controller from "@ember/controller";

export default class InitiativeInitiativeEditController extends Controller {
  queryParams = ["location"];

  @tracked
  location = null;

  @action
  goBack() {
    history.back();
  }

  get getLocation() {
    return this.store.findRecord('location', this.location);
  }

  @task(
    /**
     * @param {BufferedChangeset} changeSet
     * @this {InitiativesNewController}
     */
    function* (changeSet) {
      yield changeSet.save();
      this.goBack();
    }
  )
  saveInitiative;
}
