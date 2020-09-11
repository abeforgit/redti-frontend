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

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
  function filterable(resourceName, attrs) {
    return (schema, request) => {
      let filters = attrs.reduce((hash, attr) => {
        let val = request.queryParams[`filter[${attr}]`];
        if (val) {
          hash[attr] = val;
        }

        return hash;
      }, {});

      return schema[resourceName].where(filters);
    };
  }
  function filterByAssoc(resourceName, assoc) {
    return (schema, request) => {
      let val = request.queryParams[`filter[${assoc}]`];
      let hash = {};
      if (val) {
        hash[`${assoc}Id`] = val;
        return schema[resourceName].where(hash);
      }
    };
  }
  this.get("/items", filterByAssoc("items", "parent"));
  this.get("/items/:id");
  this.patch("/items/:id");
}
