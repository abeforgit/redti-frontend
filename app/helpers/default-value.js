import Helper from "@ember/component/helper";
import { inject as service } from "@ember/service";


export default class helper extends Helper {
  @service intl;
  compute(params, hash) {
    if (params[0]) {
      return params[0];
    }
    if (params.length <= 1) {
       return this.intl.t("noValue");
    } else {
      return params[1];
    }
  }
}
