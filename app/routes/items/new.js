import Route from "@ember/routing/route";

export default class ItemsNewRoute extends Route {
  queryParams = {
    container: {
      refreshModel: true,
    },
  };
  async model() {
    let root = await this.store.findRecord("item", "root");
    let homebase = await this.store.findRecord("location", "homebase");
    return this.store.createRecord("item", {
      parent: root,
      container: false,
      unit: "Stuks",
      quantity: 1,
      currentLocation: homebase,
    });
  }
}
