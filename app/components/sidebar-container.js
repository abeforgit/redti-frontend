import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";
import { later, cancel } from "@ember/runloop";

export default class SidebarContainerComponent extends Component {
  @service router;
  @service itemManager;

  @tracked open;
  @tracked underDrag = 0;
  timer = null;

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
    if (this.timer !== null) {
      cancel(this.timer);
    }
  }
  @action
  dropEnter() {
    this.underDrag++;
    if (this.timer === null && !this.open) {
      this.timer = later(() => {
        this.expand();
        this.timer = null;
      }, 500);
    }
  }
  @action
  dropLeave() {
    this.underDrag--;
    if (this.underDrag <= 0 && this.timer !== null) {
      cancel(this.timer);
    }
  }

  get active() {
    get(this.router, "currentRoute");
    return this.router.isActive("items.item", this.args.item.id);
  }
}
