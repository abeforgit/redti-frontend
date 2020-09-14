import Model, { attr, belongsTo } from "@ember-data/model";

export default class TransferModel extends Model {
  @attr on;
  @belongsTo("item") item;
  @belongsTo("location", { inverse: "outbox" }) from;
  @belongsTo("location", { inverse: "inbox" }) to;
}
