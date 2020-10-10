import Controller from "@ember/controller";
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
import {task} from "ember-concurrency";


export default class InitiativesNewController extends Controller {
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
      if (!changeSet["location"]) {
        changeSet["location"] = yield this.store.findRecord('location', this.location);
      }
      yield changeSet.save();
      this.goBack();
    }
  )
  saveInitiative;

}
