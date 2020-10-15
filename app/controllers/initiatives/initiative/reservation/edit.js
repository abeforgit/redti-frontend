import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";
import Controller from "@ember/controller";
import {task} from "ember-concurrency";
/**
 * @typedef {import("ember-changeset/types").BufferedChangeset} BufferedChangeset
 */


export default class ReservationEditController extends Controller {
  newReservationValidation = {}; //TODO

  @task(
    /**
     * @param {BufferedChangeset} changeSet
     * @this {ReservationEditController}
     */
    function* (changeSet) {
      // TODO: this needs to be rewritten to account for reservations time/date
      /*const items = yield this.store.findAll('item');
      items.forEach((item) => {
        const quantity = changeSet.get(item.id);
        item.reservations.then((existingReservations) => {
          if (existingReservations && existingReservations.length >= 1) {
            existingReservations.forEach((targetReservation) => {
              console.log(typeof quantity);
              if (!quantity) {
                console.log("Deleting reservations");
                return targetReservation.deleteRecord().save();
              } else if (quantity !== targetReservation.quantity) {
                console.log("Updating quantity");
                targetReservation.quantity = quantity;
                targetReservation.save();
              }
            });
          } else {
            // We don't want to add empty reservations, so a truthy check is ok here
            if (quantity) {
              console.log("Creating new");
              return this.store.createRecord('reservations', {
                quantity,
                item: item,
              }).save();
            }
          }
        });
      });*/
    }
  )
  addReservation;
}
