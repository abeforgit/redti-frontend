import { action } from "@ember/object";
import Controller from "@ember/controller";

export default class LocationsLocationEditController extends Controller {
  @action
  async setAddress(address) {
    this.address = address;
  }
}
