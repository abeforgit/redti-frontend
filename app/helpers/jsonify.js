import { helper } from "@ember/component/helper";

export default helper(function jsonify(params /*, hash*/) {
  return JSON.stringify(params);
});
