import Model, { attr, belongsTo, hasMany } from "@ember-data/model";
import { validatePresence } from "ember-changeset-validations/validators";

export const ItemValidation = {
  name: validatePresence(true),
};

export default class ItemModel extends Model {
  /** @type {string} */
  @attr("string") name;
  /** @type {string} */
  @attr("string") description;
  /** @type {number} */
  @attr("number") maxQuantity;
  /** @type {boolean} */
  @attr("boolean") infinite;
  /** @type {boolean} */
  @attr("boolean") container;
  /** @type {number} */
  @attr("number") defaultQuantity;

  @belongsTo("item", { inverse: "children" }) parent;
  @belongsTo("location", { inverse: "items" }) warehouse;
  @belongsTo("category", { inverse: "items" }) category;

  @hasMany("item", { inverse: "parent" }) children;
  @hasMany("transfer") transfers;
  @hasMany("dispatch") dispatches;
  @hasMany("reservation") reservations;
}
