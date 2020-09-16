import Component from "@glimmer/component";
import { random } from "faker";

export default class FormControlsGenTextComponent extends Component {
  /** @type {string} */
  controlId;
  constructor() {
    super(...arguments);
    this.controlId = this.args.controlId ?? `gen-text-${random.number}`;
  }
}
