import Route from '@ember/routing/route';

export default class AboutCustomRoute extends Route {
  model(params){
    return params.custom_string;
  }
}
