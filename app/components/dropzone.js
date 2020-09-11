import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class DropzoneComponent extends Component {
  @action
  dropItem(dragEvent) {
    dragEvent.preventDefault();
    console.log("Item dropped");
    this.params.dropItem ?? this.params.dropItem();
  }
  @action
  dragOver(dragEvent) {
    dragEvent.preventDefault();
    dragEvent.dataTransfer.dropEffect = "move";
    this.params.dragOver ?? this.params.dragOver();
  }
  @action
  dropEnter() {
    console.log("enter drop zone");
    this.params.dropEnter ?? this.params.dropEnter();
  }
  @action
  dropLeave() {
    console.log("leave drop zone");
    this.params.dropLeave ?? this.params.dropLeave();
  }
}
