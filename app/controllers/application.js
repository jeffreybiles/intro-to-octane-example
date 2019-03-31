import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  name = "Ember"

  book = {
    title: 'Way of Kings',
    author: 'Brandon Sanderson',
    publicationYear: 2010,
    pages: 1007,
  }
}
