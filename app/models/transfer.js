import Model, { attr, belongsTo } from "@ember-data/model";

export default class TransferModel extends Model {
  @attr("date") on;
  @attr("number") quantity;

  @belongsTo("item") item;
  @belongsTo("location", { inverse: "outbox" }) from;
  @belongsTo("location", { inverse: "inbox" }) to;
}
