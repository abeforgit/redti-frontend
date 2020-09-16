import { tracked } from "@glimmer/tracking";
import Component from "@glimmer/component";

export default class AddressMapComponent extends Component {
  /** @type {number} */
  @tracked lat;
  /** @type {number} */
  @tracked lng;
  /** @type {number} */
  @tracked zoom;

  constructor() {
    super(...arguments);
    const { latitude, longitude } = this.args.location;

    this.lat = latitude;
    this.lng = longitude;
    this.zoom = 17;
  }
}
