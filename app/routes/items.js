import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ItemsRoute extends Route {
  @service itemManager;

  async model() {
    let root = await this.store.findRecord("item", "root", {
      include: "children,children.children",
    });
    return root.children;
  }
}
