import Model, { attr, belongsTo } from "@ember-data/model";

export default class DispatchModel extends Model {
  @attr("number") quantity;

  @belongsTo("initiative") initiative;
  @belongsTo("receipt") receipt;
  @belongsTo("item") item;
}
