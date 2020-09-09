import { get } from "@ember/object";
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class SidebarItemComponent extends Component {
  @service router;

  get active() {
    get(this.router, "currentRoute");
    return this.router.isActive("items.item", this.args.item.id);
  }
}
