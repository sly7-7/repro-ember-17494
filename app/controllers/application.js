import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  queryParams = ['foo'];
  @tracked foo = null;
}
