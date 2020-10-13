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
      changeSet["startDate"] = new Date(changeSet["startDate"]);
      changeSet["endDate"] = new Date(changeSet["endDate"]);
      yield changeSet.save();
      this.goBack();
    }
  )
  saveInitiative;
}
