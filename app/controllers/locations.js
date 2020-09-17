import { action } from "@ember/object";
import Controller from "@ember/controller";

export default class LocationsController extends Controller {
  @action
  refresh() {
    this.target.send("updateItems");
  }
}
