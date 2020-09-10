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
  this.get("/items", (schema, request) => {
    let val = request.queryParams["filter[:has-no:parent]"];
    if (val) {
      return schema.items.where((item) => item.parentId === null);
    }
    return schema.items.all();
  });
  this.get("/items/:id");
}
