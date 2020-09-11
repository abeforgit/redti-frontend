import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class DropzoneComponent extends Component {
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
  @action
  dragOver(dragEvent) {
    dragEvent.preventDefault();
    dragEvent.dataTransfer.dropEffect = "move";
    this.args.dragOver && this.args.dragOver();
  }
  @action
  dropEnter(dragEvent) {
    dragEvent.preventDefault();
    console.log("enter drop zone");
    this.args.dropEnter && this.args.dropEnter();
  }
  @action
  dropLeave(dragEvent) {
    dragEvent.preventDefault();
    console.log("leave drop zone");
    this.args.dropLeave && this.args.dropLeave();
  }
}
