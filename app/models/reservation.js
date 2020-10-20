import Model, {attr, belongsTo} from "@ember-data/model";

export default class ReservationModel extends Model {
  /** @type {number} */
  @attr("number") quantity;

  @belongsTo("initiative") initiative;
  @belongsTo("item") item;
}
