import Route from "@ember/routing/route";

export default class ItemsNewRoute extends Route {
  queryParams = {
    container: {
      refreshModel: true,
    },
  };
  async model() {
    let root = await this.store.findRecord("item", "root");
    return this.store.createRecord("item", {
      parent: root,
      container: false,
      quantity: 1,
    });
  }
}
