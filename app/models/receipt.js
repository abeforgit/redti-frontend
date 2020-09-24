import Model, { attr, belongsTo } from "@ember-data/model";

export default class ReceiptModel extends Model {
  @attr("number") quantity;
  @belongsTo("dispatch") dispatch;
}
