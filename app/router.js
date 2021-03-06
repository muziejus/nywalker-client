import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("books", function() {
    this.route("show", { path: "/:book_id" }, function() {
      this.route("instances", { resetNamespace: true }, function() {
        this.route("new");
      });
    });
  });
  this.route("about");
  this.route("protected");
  this.route("places");
  this.route("help");
});

export default Router;
