import Route from '@ember/routing/route';

export default class ItemsItemEditRoute extends Route {
  async model() {
    const item = this.modelFor("items.item");
    const categories = await this.store.findAll('category');
    return { item, categories }
  }
}
