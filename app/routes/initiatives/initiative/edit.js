import Route from '@ember/routing/route';

export default class InitiativesInitiativeEditRoute extends Route {
  async model() {
    const initiative = await this.modelFor("initiatives.initiative");
    const locations = await this.store.findAll('location');
    initiative.startDate = initiative.startDate?.toISOString();
    initiative.endDate = initiative.endDate?.toISOString();
    return { initiative, locations }
  }
}
