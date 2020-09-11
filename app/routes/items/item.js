import Route from "@ember/routing/route";

export default class ItemsItemRoute extends Route {
  async model(params) {
    return this.store.findRecord("item", params.item_id, {
      include: "children,children.children",
    });
  }
}
