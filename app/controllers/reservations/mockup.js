import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import {action} from "@ember/object";

export default class ReservationsMockupController extends Controller {
  @tracked
  itemsToDisplay = {...this.model.items};

  @action
  async addCatalogusItem() {
    this.itemsToDisplay.catalogus.push({
      code: "PM5",
      name: "Voorhamer",
      amount: 1
    });
    // This is necessary to trigger the @tracked...
    this.itemsToDisplay = this.itemsToDisplay;
    console.log(this.model.locations)
  }
}
