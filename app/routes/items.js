import Route from "@ember/routing/route";

export default class ItemsRoute extends Route {
  async model() {
    return this.store.query("item", {
      filter: {
        parent: undefined,
      },
    });
  }
}
