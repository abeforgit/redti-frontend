import Route from "@ember/routing/route";

export default class LocationsRoute extends Route {
  /** @type {Promise[]} */
  itemQueries;

  async model() {
    let locations = await this.store.query("location", {
      include: "initiatives",
    });

    return {
      locations
    };
  }
}
