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
    if (this.location) {
      return this.store.findRecord('location', this.location);
    }
    return undefined;
  }

  @task(
    /**
     * @param {BufferedChangeset} changeSet
     * @this {InitiativesNewController}
     */
    function* (changeSet) {
      if (!changeSet["location"] && this.location) {
        changeSet["location"] = yield this.store.findRecord('location', this.location);
      }
      yield changeSet.save();
      this.goBack();
    }
  )
  saveInitiative;

}
