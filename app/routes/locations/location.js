import Route from "@ember/routing/route";

export default class LocationsLocationRoute extends Route {
  async model(params) {
    return this.store.findRecord("item", params.location_id, {
      include: "initiatives",
    });
  }
}
