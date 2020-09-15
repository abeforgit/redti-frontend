import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import LocationModel from "../../../models/location";
import ItemManagerService from "../../../services/item-manager";

export default class LocationsLocationTransfersRoute extends Route {
  /** @type {ItemManagerService} */
  @service itemManager;
  async model() {
    /** @type {LocationModel} */
    let location = this.modelFor("locations.location");
    return this.itemManager.transfersForLocation(location.id);
  }
}
