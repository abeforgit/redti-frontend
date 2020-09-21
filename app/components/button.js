import { action } from "@ember/object";
import Component from "@glimmer/component";

/**
 * @typedef {Object} Args
 * @property {import("ember-concurrency").Task} [task]
 * @property {() => void} [onClick]
 * @property {string} [type]
 */

/** @extends {Component<Args>} */
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
      this.args.onClick && this.args.onClick();
    }
  }

  get type() {
    return this.args.type ?? "button";
  }
}
