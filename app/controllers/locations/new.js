import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import AddressModel from "../../models/address";

export default class LocationsNewController extends Controller {
  /** @type {import("@ember/routing/router-service").default} */
  @service router;
  /** @type {string} */
  @tracked name;
  /** @type {string} */
  @tracked description;

  /** @type {AddressModel} */
  address;

  @action
  goBack() {
    history.back();
  }
  @action
  async addLocation() {
    let newAddress = this.store.createRecord("address", this.address);
    await newAddress.save();
    let newLocation = this.store.createRecord("location", {
      name: this.name,
      description: this.description,
      address: newAddress,
    });
    await newLocation.save();
    this.goBack();
  }

  /**
   * Set the address when the child addressform submits, must be async to comply with
   * foxy-forms
   * @param {AddressModel} address
   */
  @action
  async setAddress(address) {
    this.address = address;
  }
}
