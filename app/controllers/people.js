import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class PeopleController extends Controller {
    @action
    addPerson() {
        let person = this.store.createRecord('person', {name: "testPerson"});
        person.save();
    }
}
