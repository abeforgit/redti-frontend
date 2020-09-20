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
  /** @type {string} */
  @attr("string") unit;
  /** @type {number} */
  @attr("number") quantity;
  /** @type {boolean} */
  @attr("boolean") container;

  @hasMany("item", { inverse: "parent" }) children;
  @belongsTo("item", { inverse: "children" }) parent;
  @belongsTo("location", { inverse: "items" }) currentLocation;
  @hasMany("transfer") transfers;
}
