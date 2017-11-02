export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
   Config (with defaults).

   Note: these only affect routes defined *after* them!
   */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
   Shorthand cheatsheet:

   this.get('/posts');
   this.post('/posts');
   this.get('/posts/:id');
   this.put('/posts/:id'); // or this.patch
   this.del('/posts/:id');

   http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
   */
  this.namespace = '/mirage';
  this.get('/books', function () {
    return {
      data: [
        {
          type: 'book',
          id: 1,
          attributes: {
            title: 'A song of ice and fire',
            description: 'In the mysterious medieval world of Westeros, 5 houses want to access the iron throne.',
            price: 20,
          },
          relationships: {
            author: {
              data: {
                id: 1,
                type: "author"
              }
            }
          }
        },
        {
          type: 'book',
          id: 2,
          attributes: {
            title: 'Lord of the ring',
            description: 'A tiny human must bring jewelry to a mountain to defeat a fiery eye',
            price: 10,
          },
          relationships: {
            author: {
              data: {
                id: 2,
                type: "author"
              }
            }
          }
        }
      ],
      included: [{
        id: 1,
        type: "author",
        attributes: {
          firstname: "Georges",
          lastname: "R.R. Martin"
        }
      },
        {
          id: 2,
          type: "author",
          attributes: {
            firstname: "John",
            lastname: "R.R. Tolkien"
          }
        }
      ]
    }
  });
}
