import { action } from "@ember/object";
import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default class LocationsRoute extends Route {
  /** @type {Promise[]} */
  itemQueries;

  async model() {
    let locations = await this.store.query("location", {
      include: "items.parent",
    });
    let result = [];
    this.itemQueries = [];

    locations.forEach((location) => {
      let items = this.store.query("item", {
        "filter[current-location][:id:]": location.id,
        "filter[parent][:id:]": "root",
      });
      this.itemQueries.push(items);
      result.push({ location, items });
    });
    return result;
  }
  @action
  updateItems() {
    RSVP.all(this.itemQueries).then((qs) => qs.forEach((q) => q.update()));
  }
}
