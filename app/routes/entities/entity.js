import Route from "@ember/routing/route";

export default class EntitiesEntityRoute extends Route {
  async model(params) {
    return this.store.findRecord("entity", params.id);
  }
}
