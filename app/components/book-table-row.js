import Component from '@glimmer/component';

export default class BookTableRowComponent extends Component {
  get isSelected(){
    return this.args.book === this.args.selectedBook;
  }
}
