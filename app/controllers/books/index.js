import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked sortProperty = 'pages'
  @tracked isReversed = false;
  @tracked selectedBookIds = [2, 4]
  @tracked hiddenBookIds = [1, 3]

  get books() {return this.model};
  get hiddenBooks(){
    return this.sortedBooks.filter((book)=>{
      return this.hiddenBookIds.includes(book.id);
    });
  }
  get shownBooks(){
    return this.sortedBooks.filter((book)=>{
      return !this.hiddenBookIds.includes(book.id);
    });
  }
  get noBooksSelected(){ return this.selectedBookIds.length === 0 }
  get allBooksSelected(){ return this.selectedBookIds.length === this.books.length }
  get sortedBooks(){
    let books = this.books.sortBy(this.sortProperty);
    if(this.isReversed) {
      return books.reverse();
    } else {
      return books;
    }
  }

  @action sortBooks(sortProperty){
    if(this.sortProperty === sortProperty) {
      this.isReversed = !this.isReversed;
    } else {
      this.isReversed = false;
    }
    this.sortProperty = sortProperty
  }
  @action toggleBookSelection(book) {
    if(this.selectedBookIds.includes(book.id)){
      this.selectedBookIds.removeObject(book.id);
    } else {
      this.selectedBookIds.addObject(book.id);
    }
    this.notifyPropertyChange('selectedBookIds');
  }
  @action hideBook(book) { this.hiddenBookIds.addObject(book.id); }
  @action hideBooks(){ this.hiddenBookIds.addObjects(this.selectedBookIds); }
  @action showBook(book) { this.hiddenBookIds.removeObject(book.id); }
  @action showBooks(){ this.hiddenBookIds.removeObjects(this.selectedBookIds); }
  @action selectAll(){ this.selectedBookIds = this.books.mapBy('id'); }
  @action unselectAll(){ this.selectedBookIds = [] }

  headerInfo = [
    {name: 'Title', sortBy: 'title'},
    {name: 'Author', sortBy: 'author'},
    {name: 'Publication Year', sortBy: 'publicationYear'},
    {name: 'Pages', sortBy: 'pages'},
  ]
}
