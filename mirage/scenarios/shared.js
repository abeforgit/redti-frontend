export default function (server) {
  let root = server.create("item", {
    container: true,
    id: "root",
    name: "root",
  });
  root.update({ parent: null });
}
