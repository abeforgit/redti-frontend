import { action } from "@ember/object";
import Component from "@glimmer/component";
/**
 * @typedef {Object} Args
 * @property {string} [contentType]
 * @property {(any) => void} [dropItem]
 * @property {() => void} [dragOver]
 * @property {() => void} [dropEnter]
 * @property {() => void} [dropLeave]
 */

/**
 * @extends {Component<Args>}
 */
export default class DropzoneComponent extends Component {
  /**
   * @param {DragEvent} dragEvent
   */
  @action
  dropItem(dragEvent) {
    dragEvent.preventDefault();
    let type = this.args.contentType ?? "application/json";
    let data = dragEvent.dataTransfer.getData(type);
    if (type === "application/json") {
      data = JSON.parse(data);
    }
    console.log(data);
    this.args.dropItem && this.args.dropItem(data);
  }
  /**
   * @param {DragEvent} dragEvent
   */
  @action
  dragOver(dragEvent) {
    dragEvent.preventDefault();
    dragEvent.dataTransfer.dropEffect = "move";
    this.args.dragOver && this.args.dragOver();
  }
  /**
   * @param {DragEvent} dragEvent
   */
  @action
  dropEnter(dragEvent) {
    dragEvent.preventDefault();
    console.log("enter drop zone");
    this.args.dropEnter && this.args.dropEnter();
  }
  /**
   * @param {DragEvent} dragEvent
   */
  @action
  dropLeave(dragEvent) {
    dragEvent.preventDefault();
    console.log("leave drop zone");
    this.args.dropLeave && this.args.dropLeave();
  }
}
