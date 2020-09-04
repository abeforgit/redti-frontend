import Route from '@ember/routing/route';

export default class PeopleRoute extends Route {
    async model() {
        return this.store.query('person', {'page[size]': 4});
    }
}
