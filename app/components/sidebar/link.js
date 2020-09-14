import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";

export default class SidebarLinkComponent extends Component {
  @service router;
  get active() {
    get(this.router, "currentRoute");
    return this.router.isActive("items.item", this.args.model);
  }
}
