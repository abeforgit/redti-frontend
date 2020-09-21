import { action } from "@ember/object";
import Component from "@glimmer/component";
import { task } from "ember-concurrency";
import { Changeset } from "ember-changeset";
import lookupValidator from "ember-changeset-validations";

/**
 * @typedef {import("ember-changeset/types").BufferedChangeset} BufferedChangeset
 */
/**
 * @typedef {Object} Args
 * @property {BufferedChangeset} changeSet
 */

/** @extends {Component<Args>} */
export default class UiFormComponent extends Component {
  /** @type {BufferedChangeset} */
  changeSet;

  constructor(target, args) {
    super(target, args);
    // args are immutable, so we need this
    this.changeSet = this.args.changeSet;
  }
  @task(
    /** @this {UiFormComponent} */
    function* () {
      if (this.changeSet.isValid) {
        yield this.args.onSubmit(this.changeSet);
      }
    }
  )
  submitTask;

  @action
  submit(event) {
    event.preventDefault();
    this.submitTask.perform();
  }
}
