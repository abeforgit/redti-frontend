import Component from "@glimmer/component";
import { guidFor } from "@ember/object/internals";

export default class UiFormGroupComponent extends Component {
  get uniqueId() {
    return `${guidFor(this)}-input`;
  }
}
