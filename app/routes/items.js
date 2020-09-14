import Route from "@ember/routing/route";

export default class ItemsRoute extends Route {
  async model() {
    let root = this.store.findRecord("item", "root", {
      include: "children,children.children",
    });
    return root;
  }
}
