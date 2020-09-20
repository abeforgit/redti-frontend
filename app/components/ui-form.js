import { action } from "@ember/object";
import Component from "@glimmer/component";
import { task } from "ember-concurrency";
import { Changeset } from "ember-changeset";
import lookupValidator from "ember-changeset-validations";

/**
 * @typedef {Object} Args
 * @property {Object} model
 * @property {Object} [validation]
 */

/** @extends {Component<Args>} */
export default class UiFormComponent extends Component {
  constructor(target, args) {
    super(target, args);
    if (this.args.validation) {
      this.changeSet = Changeset(
        this.args.model,
        lookupValidator(this.args.validation),
        this.args.validation
      );
    } else {
      this.changeSet = Changeset(this.args.model);
    }
  }
  @task(function* () {
    console.log("in submittask");
    if (this.changeSet.isValid) {
      yield this.changeSet.save();
      yield this.args.onSubmit();
    }
  })
  submitTask;

  @action
  submit(event) {
    event.preventDefault();
    console.log("in submit");
    this.submitTask.perform();
  }
}
