import Service from '@ember/service';
import fetch from 'fetch';

export default class TestService extends Service {
    constructor() {
        super(...arguments);
    }
    async fetchAll() {
        let response = await fetch("/test");
        let json = await response.json();
        return json.data;
        
    }
}
