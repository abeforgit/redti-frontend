import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { get } from "@ember/object";
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class SidebarItemComponent extends Component {
  @service router;
  @tracked open;

  constructor() {
    super(...arguments);
    this.open = this.router.isActive("items.item", this.args.item.id);
    this.get = get;
  }
  @action
  changeParent(item) {
    console.log(item.name);
  }
  @action
  toggle() {
    this.router.transitionTo("items.item", this.args.item.id);
    this.open = !this.open;
  }

  @action
  expand() {
    this.router.transitionTo("items.item", this.args.item.id);
    this.open = true;
  }

  get active() {
    get(this.router, "currentRoute");
    return this.router.isActive("items.item", this.args.item.id);
  }
}
