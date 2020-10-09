import Route from '@ember/routing/route';

export default class LocationsNewRoute extends Route {
  async model() {
    let newAddress = this.store.createRecord('address');
    let newLocation = this.store.createRecord('location', {
      address: newAddress,
    });

    return {
      address: newAddress,
      location: newLocation,
    }
  }
}
