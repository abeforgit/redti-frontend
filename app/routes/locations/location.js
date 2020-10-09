import Route from "@ember/routing/route";

export default class LocationsLocationRoute extends Route {
  async model(params) {
    return this.store.findRecord("location", params.location_id, {
      include: "initiatives,address",
    });
  };
}
