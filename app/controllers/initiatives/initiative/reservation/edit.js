import Controller from "@ember/controller";
import {task} from "ember-concurrency";
import {action} from "@ember/object";
/**
 * @typedef {import("ember-changeset/types").BufferedChangeset} BufferedChangeset
 */


export default class InitiativesInitiativeReservationEditController extends Controller {
  newReservationValidation = {}; //TODO

  @action
  goBack() {
    history.back();
  }


  @task(
    /**
     * @param {BufferedChangeset} changeSet
     * @this {InitiativesInitiativeReservationEditController}
     */
    function* (changeSet) {
      const items = yield this.store.query('item', {'filter[:id:]' : changeSet.changes.map(c => c.key).join(',')});
      yield Promise.all(items.map(async (item) => {
        const reservations = await this.store.query('reservation',  {
          'filter[initiative][:id:]': this.model.initiative.get('id'),
          'filter[item][:id:]': item.get('id'),
        });
        const quantity = parseInt(changeSet.get(item.id));
        if (quantity === 0 && reservations.length > 0) {
          await Promise.all(reservations.map(async (reservation) => {
            await reservation.destroyRecord();
          }));
        } else if(quantity !== 0) {
          console.log(reservations.length);
          if (reservations.length > 0) {
            await Promise.all(reservations.map((reservation) => {
              reservation.quantity = quantity;
              return reservation.save();
            }))
          } else {
            await this.store.createRecord('reservation', {
              initiative: this.model.initiative,
              item,
              quantity,
            }).save();
          }
        }
      }));
      this.goBack();
    }
  )
  addReservation;
}
