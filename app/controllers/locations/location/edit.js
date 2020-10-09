import { action } from "@ember/object";
import Controller from "@ember/controller";
import {task} from "ember-concurrency";

export default class LocationsLocationEditController extends Controller {
  locationAddressValidation = {}; //TODO

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
      // changeSet.execute();

      // this.model.location.address = yield this.model.address.save();

      // yield this.model.location.save();

      changeSet.execute();
      this.model.location.save();
      this.model.address.save();

      this.goBack();
    }
  )
  saveLocation;
}
