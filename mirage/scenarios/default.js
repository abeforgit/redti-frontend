import shared from "./shared";
export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  // server.createList('post', 10);
  // server.createList("item", 10);
  let root = shared(server);
  server
    .createList("item", 5, { container: true, parent: root })
    .forEach((item) => {
      server
        .createList("item", 3, { container: true, parent: item })
        .forEach((item) => server.createList("item", 2, { parent: item }));
    });
}
