import Component from "@glimmer/component";
import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";

export default class UiFormSelectComponent extends Component {
  @tracked
  value;

  constructor(target, args) {
    super(target, args);
    this.value = this.args.selected || args.model[args.for];
  }

  @action
  setValue(newVal) {
    this.value = newVal;
    this.args.updateChangeset(this.args.for, newVal);
  }
}
