import Controller from "@ember/controller";
import {task} from "ember-concurrency";
import {action} from "@ember/object";

export default class LocationsNewController extends Controller {
  newLocationAddressValidation = {}; //TODO

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
      // To get the address working in the same form, apply the changeset and save afterwards
      changeSet.execute();

      this.model.location.address = yield this.model.address.save();

      yield this.model.location.save();

      // TODO: go to newly created location
      this.goBack();
    }
  )
  saveLocation;
}
