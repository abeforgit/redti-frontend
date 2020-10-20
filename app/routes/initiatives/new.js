import Route from '@ember/routing/route';

export default class InitiativesNewRoute extends Route {
  queryParams = {
    location: {
      refreshModel: true,
    },
  };
  async model() {
    const newInitiative = this.store.createRecord('initiative');
    const locations = this.store.findAll("location");
    return {
      initiative: newInitiative,
      locations,
    }
  }
}
