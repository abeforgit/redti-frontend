import { tracked } from "@glimmer/tracking";
import Controller from "@ember/controller";

export default class ItemsItemEditController extends Controller {
  @tracked name;
  @tracked description;
  @tracked quantity;
  @tracked unit;
}
