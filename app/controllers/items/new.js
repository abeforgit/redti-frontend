import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import Controller from "@ember/controller";

export default class ItemsNewController extends Controller {
  @service router;

  @action
  goBack() {
    history.back();
  }

  @action
  async addItem() {
    let item = {
      name: this.name,
      description: this.description,
      unit: this.unit,
      quantity: this.quantity,
      container: false,
    };
    let newItem = this.store.createRecord("item", item);
    await newItem.save();
    this.router.transitionTo("items");
  }
}
