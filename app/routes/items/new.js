import Route from "@ember/routing/route";

export default class ItemsNewRoute extends Route {
  queryParams = {
    container: {
      refreshModel: true,
    },
  };
  async model() {
    let root = await this.store.findRecord("item", "root");
    let newItem = this.store.createRecord("item", {
      parent: root,
      container: false,
      maxQuantity: 1,
      defaultQuantity: 1,
    });
    let categories = this.store.findAll('category');
    return {
      item: newItem,
      categories: categories,
    }
  }
}
