import { action } from "@ember/object";
import Controller from "@ember/controller";

export default class LocationsController extends Controller {
  @action
  refresh() {
    this.target.send("updateItems");
  }

  @action
  async seed() {
    const zevensprongAddress = await this.store.createRecord('address', {
      country: "België",
      region: "Vlaams-Brabant",
      postalCode: "3000",
      street: "Rijschoolstraat 23",
      city: "Leuven"
    }).save();
    const zevensprong = await this.store.createRecord('location', {
      name: "De Zevensprong",
      description: "Dit is vlak bij het Jonge Helden hoofdkwartier en dus super handig voor animatoren.",
      latitude: 50.8813431,
      longitude: 4.7033234,
      address: zevensprongAddress
    }).save();

    const rozendaalAddress = await this.store.createRecord('address', {
      country: "België",
      region: "Antwerpen",
      postalCode: "2860",
      street: "Rozendaal",
      city: "Sint-Katelijne-Waver"
    }).save();
    const rozendaal = await this.store.createRecord('location', {
      name: "Sint-Katelijne-Waver - Domein Roosendael",
      description: "Domein Roosendaal is de gedroomde locatie voor groepsverblijven en jeugdwerkinitiatieven. Groepen die hier verblijven kunnen genieten van de gastvrijheid die deze plek al eeuwen kenmerkt. Domein Roosendael is centraal gelegen op de as Antwerpen-Brussel, dicht bij Mechelen.",
      latitude: 51.0693967,
      longitude: 4.4659618,
      address: rozendaalAddress
    }).save();
  }
}
