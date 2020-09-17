import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default class LocationsRoute extends Route {
  async model() {
    let locations = await this.store.findAll("location", {
      include: "items.parent",
    });
    return locations;
  }
}
