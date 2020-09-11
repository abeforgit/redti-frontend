import { Factory } from "ember-cli-mirage";

export default Factory.extend({
  name(i) {
    return `Item ${i}`;
  },
  description(i) {
    return `Description for Item ${i}`;
  },
  unit(i) {
    return `Unit for Item ${i}`;
  },
  quantity() {
    let min = 0;
    let max = 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  container: false,
  parent: null,
  afterCreate(item, server) {
    if (!item.parent) {
      let root = server.schema.items.find("root");
      item.update({ parent: root });
    }
  },
});
