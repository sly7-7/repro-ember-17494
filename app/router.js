import EmberRouter from '@ember/routing/router';
import config from 'repro-ember-17494/config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {});

export default Router;
