import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class DraggableComponent extends Component {
  @action
  dragHasStarted(dragEvent) {
    console.log("Drag has started");
    dragEvent.dataTransfer("application/json", this.args.content);
  }
}
