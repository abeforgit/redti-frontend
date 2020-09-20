import { task, timeout } from "ember-concurrency";
import { action } from "@ember/object";
import Controller from "@ember/controller";
import { ItemValidation } from "redti-front/models/item";

class NewItem {
  name;
  constructor() {
    this.name = name;
  }
}
export default class ItemsNewController extends Controller {
  newItem = new NewItem();
  newItemValidation = ItemValidation;

  @action
  goBack() {
    history.back();
  }

  @task(function* () {
    alert(JSON.stringify(this.newItem));
  })
  addItem;
}
