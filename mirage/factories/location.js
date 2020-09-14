import { Factory, association } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  name() {
    return faker.random.words(3);
  },
  description() {
    return faker.lorem.paragraph();
  },
  address: association(),
});
