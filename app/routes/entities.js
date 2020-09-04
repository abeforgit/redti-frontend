import Route from '@ember/routing/route';

export default class EntitiesRoute extends Route {
    async model() {
        return this.store.findAll('entity');
    }
}
