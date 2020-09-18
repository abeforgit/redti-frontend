import { action } from "@ember/object";
import Component from "@glimmer/component";
/**
 * @typedef {Object} Args
 * @property {string} [contentType]
 * @property {any} [content]
 */

/** @extends {Component<Args>} */
export default class DraggableComponent extends Component {
  /**
   * @param {DragEvent} dragEvent
   */
  @action
  dragHasStarted(dragEvent) {
    console.log("Drag has started");
    let type = this.args.contentType ?? "application/json";
    if (type === "application/json") {
      dragEvent.dataTransfer.setData(type, JSON.stringify(this.args.content));
    } else {
      dragEvent.dataTransfer.setData(type, this.args.content);
    }
  }
}
