import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class TestRoute extends Route {
    @service test;
    model() {
        return this.test.fetchAll();
    }
}
