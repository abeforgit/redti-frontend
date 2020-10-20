import Route from '@ember/routing/route';

export default class InitiativesInitiativeEditRoute extends Route {
  async model() {
    const initiative = this.modelFor("initiatives.initiative");
    const locations = this.store.findAll('location');
    return { initiative, locations }
  }
}
