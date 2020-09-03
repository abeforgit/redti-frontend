import { action } from '@ember/object';
import Controller from '@ember/controller';
import fetch from 'fetch';

export default class TestController extends Controller {
    @action
    async insert() {
        let payload = {
            data: {
                type: 'test',
                attributes: {
                    name: 'yeet'
                }
            }
        };
        let response = await fetch(
            "/test", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/vnd.api+json'
            },
            body: JSON.stringify(payload)

        }
        );
        console.log(response);

    }


}
