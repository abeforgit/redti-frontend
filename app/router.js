import EmberRouter from "@ember/routing/router";
import config from "redti-front/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("items", function () {
    this.route("new");
    this.route("item", { path: ":item_id" });
  });
});
