import Route from "@ember/routing/route";

export default class LocationsRoute extends Route {
  model() {
    return this.store.findAll("location");
  }
}
