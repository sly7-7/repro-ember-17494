import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  queryParams = {
    foo: { refreshModel: true },
  };

  beforeModel(transition) {
    const params = this.paramsFor('application');
    if (params.foo === null) {
      return this.transitionTo({ queryParams: { foo: 6 } }).catch(function (
        reason
      ) {
        alert('CATCH transitionTo: ' + reason);
      });
    }
  }
}
