import {action} from "@ember/object";
import Controller from "@ember/controller";
import {task} from "ember-concurrency";
/**
 * @typedef {import("ember-changeset/types").BufferedChangeset} BufferedChangeset
 */


export default class ReservationNewController extends Controller {

  newReservationValidation = {}; //TODO

  @action
  async seed() {
    let root = await this.store.findRecord("item", "root");
    console.log(root);
    for (let i = 0; i < 5; i++) {
      let category = await this.store.createRecord('category', {
        name: "Category " + i
      }).save();
      for (let j = 0; j < 3; j++) {
        this.store.createRecord('item', {
          name: "Item " + i + j,
          description: "This item was made for category " + i,
          parent: root,
          defaultQuantity: j,
          category: category
        }).save();
      }
    }
  }

  @task(
    /**
     * @param {BufferedChangeset} changeSet
     * @this {ReservationNewController}
     */
    function* (changeSet) {
      // TODO: this needs to be rewritten to account for reservation time/date
      /*const items = yield this.store.findAll('item');
      items.forEach((item) => {
        const quantity = changeSet.get(item.id);
        item.reservations.then((existingReservations) => {
          if (existingReservations && existingReservations.length >= 1) {
            existingReservations.forEach((targetReservation) => {
              console.log(typeof quantity);
              if (!quantity) {
                console.log("Deleting reservation");
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
              return this.store.createRecord('reservation', {
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
