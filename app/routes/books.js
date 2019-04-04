import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
  model(params){
    return [{
      id: 1,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      publicationYear: 1932,
      pages: 248,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/brave-new-world-cover.jpg'
    }, {
      id: 2,
      title: 'Way of Kings',
      author: 'Brandon Sanderson',
      publicationYear: 2010,
      pages: 1007,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/way-of-kings.jpg'
    }, {
      id: 3,
      title: 'Gulag Archipelago',
      author: 'Aleksandr Solzhenitsyn',
      publicationYear: 1973,
      pages: 2032,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/gulag-archipelago.jpg'
    }, {
      id: 4,
      title: 'Fire Upon the Deep',
      author: 'Vernor Vinge',
      publicationYear: 1992,
      pages: 391,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/fire-upon-the-deep.jpg'
    }, {
      id: 5,
      title: 'Speaker for the Dead',
      author: 'Orson Scott Card',
      publicationYear: 1986,
      pages: 415,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/speaker-for-the-dead.jpg'
    }, {
      id: 6,
      title: 'My Hero Academia volume 1',
      author: 'Kohei Horikoshi',
      publicationYear: 2014,
      pages: 192,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/boku-no-hero-academia-vol-1.jpg'
    }, {
      id: 7,
      title: 'Eye of the World',
      author: 'Robert Jordan',
      publicationYear: 1990,
      pages: 685,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/eye-of-the-world.jpg'
    }, {
      id: 8,
      title: 'Dune',
      author: 'Frank Herbert',
      publicationYear: 1965,
      pages: 412,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/dune.jpg'
    }, {
      id: 9,
      title: 'Anathem',
      author: 'Neal Stephenson',
      publicationYear: 2008,
      pages: 937,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/anathem.jpg'
    }, {
      id: 10,
      title: 'Wrinkle in Time',
      author: 'Madeleine L\'Engle',
      publicationYear: 1962,
      pages: 228,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/wrinkle-in-time.jpg'
    }, {
      id: 11,
      title: 'The Giver',
      author: 'Lois Lowry',
      publicationYear: 1993,
      pages: 256,
      imgUrl: 'https://s3.amazonaws.com/happy-programmer/intro-to-ember-octane/the-giver.jpg'
    }]
  }
}
