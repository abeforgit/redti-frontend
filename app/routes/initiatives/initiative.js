import Route from '@ember/routing/route';

export default class InitiativesInitiativeRoute extends Route {
  async model(params) {
    return this.store.findRecord("initiative", params.initiative_id, {
      include: "reservations",
    });
  }
}
