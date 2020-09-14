export default function (server) {
  let root = server.create("item", {
    container: true,
    id: "root",
    name: "root",
  });
  let homeAddress = server.create("address", {
    country: "Belgium",
    region: "Limburg",
    city: "Retie",
    street: "Lindeboom 4",
    postalCode: "2470",
  });
  server.create("location", {
    id: "homebase",
    name: "Jonge Helden HQ",
    address: homeAddress,
  });
  root.update({ parent: null });
}
