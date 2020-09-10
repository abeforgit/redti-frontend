import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class DraggableComponent extends Component {
  @action
  dragHasStarted() {
    console.log("Drag has started");
  }
}
