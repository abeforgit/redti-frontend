import Model, { attr, belongsTo } from '@ember-data/model';

export default class ItemModel extends Model {
    @attr name;
    @belongsTo('entity') owner;
}
