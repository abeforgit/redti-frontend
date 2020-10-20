import Route from '@ember/routing/route';

export default class InitiativesInitiativeReservationEditRoute extends Route {

  async model() {
    const categories = this.store.findAll('category');
    const initiative = await this.modelFor("initiatives.initiative");
    const items = await this.store.findAll('item', {
      reload: true
    });

    const reservedAmounts = {};
    items.forEach((item) => {
      reservedAmounts[item.get('id')] = 0;
    });

    const reservations = await initiative.reservations;
    reservations.forEach((reservation) => {
      // get('id') is required here because .id does something else
      reservedAmounts[reservation.item.get('id')] = reservation.quantity;
    });

    return { categories, reservedAmounts, initiative };
  }
}
