import Model, { attr, belongsTo, hasMany } from "@ember-data/model";

export default class InitiativeModel extends Model {
  @attr("string") name;
  @attr("string") description;
  @attr("date") startDate;
  @attr("date") endDate;

  @belongsTo("location") location;

  @hasMany("reservation") reservations;
  @hasMany("dispatch") dispatches;
}
