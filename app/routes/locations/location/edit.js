import Route from '@ember/routing/route';

export default class LocationsLocationEditRoute extends Route {
  async model() {
    const location = this.modelFor("locations.location");
    const address = await location.address;

    return {
      address,
      location,
    }
  }
}
