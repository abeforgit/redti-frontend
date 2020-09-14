import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  country() {
    return faker.address.country();
  },
  region() {
    return faker.address.county();
  },
  postalCode() {
    return faker.address.zipCode();
  },
  street() {
    return faker.address.streetAddress();
  },
});
