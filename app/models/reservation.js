import Model, { belongsTo } from "@ember-data/model";

export default class ReservationModel extends Model {
  @belongsTo("initiative") initiative;
  @belongsTo("item") item;
}
