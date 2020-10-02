import Route from '@ember/routing/route';

export default class ReservationNewRoute extends Route {
  async model() {
    let categories = await this.store.findAll('category');
    let items = await this.store.findAll('item');
    let reservation = {};
    items.forEach((item) => {
      reservation[item.id] = item.defaultQuantity || 0;
    })
    return { categories, reservation };
  }
}
