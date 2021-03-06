import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class AuthService extends Service {
  @service router;

  ensureSignedIn() {
    this.router.transitionTo('login', {
      queryParams: { security_key: 's3cr3t' },
    });
  }
}
