import Model, { attr, belongsTo } from "@ember-data/model";

export default class AddressModel extends Model {
  @attr("string") country;
  @attr("string") region;
  @attr("string") postalCode;
  @attr("string") street;
  @attr("string") city;
  @belongsTo("location") location;
}
