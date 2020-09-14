import Model, { attr, belongsTo, hasMany } from "@ember-data/model";

export default class ItemModel extends Model {
  @attr name;
  @attr description;
  @attr unit;
  @attr quantity;
  @attr container;
  @hasMany("item", { inverse: "parent" }) children;
  @belongsTo("item", { inverse: "children" }) parent;
  @hasMany("transfer") transfers;
}
