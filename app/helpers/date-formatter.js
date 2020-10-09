import { helper } from '@ember/component/helper';

export default helper(function dateFormatter(params/*, hash*/) {
  const date = params[0];
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
});
