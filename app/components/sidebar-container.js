import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";

export default class SidebarContainerComponent extends Component {
  @service router;
  @service itemManager;

  @tracked open;
  @tracked underDrag = 0;

  constructor() {
    super(...arguments);
    this.open = this.router.isActive("items.item", this.args.item.id);
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
  @action
  changeParent(itemId) {
    this.underDrag = 0;
    this.itemManager.reparent(itemId, this.args.item.id);
  }
  @action
  dropEnter() {
    this.underDrag++;
  }
  @action
  dropLeave() {
    this.underDrag--;
  }

  get active() {
    get(this.router, "currentRoute");
    return this.router.isActive("items.item", this.args.item.id);
  }
}
