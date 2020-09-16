import Model, { attr, belongsTo, hasMany } from "@ember-data/model";

export default class LocationModel extends Model {
  @attr name;
  @attr description;
  @attr("number") latitude;
  @attr("number") longitude;
  @belongsTo("address") address;
  @hasMany("transfer", { inverse: "from" }) outbox;
  @hasMany("transfer", { inverse: "to" }) inbox;
  @hasMany("item", { inverse: "currentLocation" }) items;
}
