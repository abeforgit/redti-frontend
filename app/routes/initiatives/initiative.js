import Route from '@ember/routing/route';

export default class InitiativesInitiativeRoute extends Route {
  async model(params) {
    return await this.store.findRecord("initiative", params.initiative_id, {
      include: "reservations,reservations.item",
    });
  }
}
