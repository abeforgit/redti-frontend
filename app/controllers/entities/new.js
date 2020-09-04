import {action} from "@ember/object";
import Controller from "@ember/controller";

export default class EntitiesNewController extends Controller {
  @action
  saveEntity() {
    let result = this.store.createRecord("entity", {name: this.name});
    result.save();
  }
}
