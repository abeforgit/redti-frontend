import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { later, cancel } from "@ember/runloop";

export default class SidebarLocationComponent extends Component {
  @service router;
  @service itemManager;
  @tracked underDrag = 0;
  timer = null;

  @tracked open;

  constructor() {
    super(...arguments);
    this.open = this.router.isActive(
      "locations.location",
      this.args.location.id
    );
  }
  @action
  expand() {
    this.router.transitionTo("locations.location", this.args.location.id);
    this.open = true;
  }
  @action
  toggle() {
    this.router.transitionTo("locations.location", this.args.location.id);
    this.open = !this.open;
  }
  @action
  transferItem(itemId) {
    this.underDrag = 0;
    this.itemManager.transferItem(itemId, this.args.location.id);
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
}
