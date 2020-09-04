import Model, {attr, hasMany} from "@ember-data/model";

export default class EntityModel extends Model {
  @attr name;
  @hasMany("item") ownedItems;
}
