import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { next } from '@ember/runloop';

export default class MyRouteController extends Controller {
  queryParams = [{ detailId: 'detail' }];

  @tracked detailId;

  @service('router') router;

  @action
  async doTransition() {
    this.router.transitionTo('index');
    this.router.transitionTo('my-route', {
      queryParams: { detail: this.detailId },
    });
  }
}
