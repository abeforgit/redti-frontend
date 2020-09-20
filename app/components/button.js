import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class ButtonComponent extends Component {
  /**
   * @param {Event} event
   */
  @action
  onClick(event) {
    event.preventDefault();
    console.log("button click");
    if (this.args.task) {
      this.args.task.perform();
    } else {
      this.args.onClick();
    }
  }

  get type() {
    return this.args.type ?? "button";
  }
}
