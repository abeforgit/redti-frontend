import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class SidebarLocationComponent extends Component {
  @service router;

  timer = null;

  @tracked open;

  constructor() {
    super(...arguments);

    this.open = this.router.isActive(
      "locations.location",
      this.args.location.id
    ) || this.router.isActive(
      "initiatives"
    );
  }

  @action
  toggle() {
    this.open = !this.open;
  }
}
