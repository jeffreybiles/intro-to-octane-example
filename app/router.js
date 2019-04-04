import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', function() {
    this.route('me');
    this.route('books');
    this.route('custom', {path: 'custom/:custom_string'})
  });
  this.route('books', {path: '/'}, function(){
    // this.route('index');
    this.route('book', {path: '/book/:id'})
  });
});

export default Router;
