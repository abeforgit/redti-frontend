import Model, { attr, belongsTo, hasMany } from "@ember-data/model";

export default class LocationModel extends Model {
  @attr("string") name;
  @attr("string") description;
  @attr("number") latitude;
  @attr("number") longitude;

  @belongsTo("address") address;

  @hasMany("transfer", { inverse: "from" }) outbox;
  @hasMany("transfer", { inverse: "to" }) inbox;
  @hasMany("item", { inverse: "warehouse" }) items;
  @hasMany("initiative") initiatives;
}
