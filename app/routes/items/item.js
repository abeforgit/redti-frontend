import Route from "@ember/routing/route";

export default class ItemsItemRoute extends Route {
  async model(params) {
    let item = await this.store.findRecord("item", params.item_id, {
      include: "children",
    });
    return item;
  }
}
