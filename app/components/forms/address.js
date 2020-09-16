import Component from "@glimmer/component";
import AddressModel from "../../models/address";

export default class FormsAddressComponent extends Component {
  /** @type {AddressModel} */
  address;
  constructor() {
    super(...arguments);
    this.address = this.args.address ?? {};
  }
}
