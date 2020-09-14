import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";
import { later, cancel } from "@ember/runloop";

export default class SidebarContainerComponent extends Component {
  get active() {
    get(this.router, "currentRoute");
    return this.router.isActive("items.item", this.args.item.id);
  }
}
