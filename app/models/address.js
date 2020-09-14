import Model, { attr, hasMany } from "@ember-data/model";

export default class AddressModel extends Model {
  @attr country;
  @attr region;
  @attr postalCode;
  @attr street;
  @attr city;
  @hasMany("location") location;
}
