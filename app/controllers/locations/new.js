import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default class LocationsNewController extends Controller {
  /** @type {import("@ember/routing/router-service").default} */
  @service router;
  /** @type {string} */
  @tracked name;
  /** @type {string} */
  @tracked description;

  @action
  goBack() {
    this.router.transitionTo("locations");
  }
  @action
  async addLocation() {
    let newLocation = this.store.createRecord("location", {
      name: this.name,
      description: this.description,
    });
    await newLocation.save();
    this.goBack();
  }
}
