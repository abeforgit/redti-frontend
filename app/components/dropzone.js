import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class DropzoneComponent extends Component {
  @action
  dropItem(dragEvent) {
    dragEvent.preventDefault();
    console.log("Item dropped");
  }
  @action
  dragOver(dragEvent) {
    dragEvent.preventDefault();
    dragEvent.dataTransfer.dropEffect = "move";
  }
  @action
  dropLeave() {
    console.log("leave drop zone");
  }
  @action
  dropEnter() {
    console.log("enter drop zone");
  }
}
