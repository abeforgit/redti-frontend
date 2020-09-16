import { Factory, association } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  name() {
    return faker.random.words(3);
  },
  description() {
    return faker.lorem.paragraph();
  },
  latitude: 51.267025,
  longitude: 5.083918,
  address: association(),
});
