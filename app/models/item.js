import Model, { attr, belongsTo } from "@ember-data/model";

export default class ItemModel extends Model {
  @attr name;
  @attr description;
  @attr unit;
  @attr quantity;
}
