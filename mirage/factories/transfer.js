import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  on() {
    return faker.date.recent();
  },
});
