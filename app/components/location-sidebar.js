import {action} from "@ember/object";
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

/** @extends {Component<Args>} */
export default class LocationSidebarComponent extends Component {
  @service store;
  @action
  async seed() {
    const initiatives = await this.store.findAll('initiative');
    initiatives.forEach(x => x.destroyRecord());

    const locations = await this.store.findAll('location');
    locations.forEach(x => x.destroyRecord());

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
      name: "Domein Roosendael",
      description: "Domein Roosendaal is de gedroomde locatie voor groepsverblijven en jeugdwerkinitiatieven. Groepen die hier verblijven kunnen genieten van de gastvrijheid die deze plek al eeuwen kenmerkt. Domein Roosendael is centraal gelegen op de as Antwerpen-Brussel, dicht bij Mechelen.",
      latitude: 51.0693967,
      longitude: 4.4659618,
      address: rozendaalAddress
    }).save();

    const koddigeKlussers = await this.store.createRecord('initiative', {
      name: "Koddige Klussers",
      description: "Een Yenga blok, daarop een lego blok, een grote kartonnen doos,…  We bouwen een toren zo hoog dat je heel het land kan zien, een kamp zo groot dat er een familie beren in kan leven, een huis dat zelfs de boze wolf niet omver krijgt. Bouw jij met ons mee?",
      startDate: new Date('2020/7/20'),
      endDate: new Date('2020/7/24'),
      location: zevensprong,
    }).save();

    const bonteBoerderij = await this.store.createRecord('initiative', {
      name: "Bonte Boerderij",
      description: "Leven zoals op een echte boerderij, dat is super leuk! We gaan de geitjes melken, zaadjes planten, groenten oogsten en nog zoveel meer. Wie wilt er mee alle kneepjes van het vak leren?",
      startDate: new Date('2020/7/27'),
      endDate: new Date('2020/7/31'),
      location: zevensprong,
    }).save();

    const professorBolleboos = await this.store.createRecord('initiative', {
      name: "Professor Bolleboos",
      description: "Wetenschap, het is toch een raar diertje. Het ene moment heb je twee flesjes met in het ene iets groen en in het andere iets blauw, het andere moment BOEM! Een hele explosie. Duik jij mee met ons in de wondere wereld van wetenschap en experimenten?",
      startDate: new Date('2020/8/10'),
      endDate: new Date('2020/8/16'),
      location: rozendaal,
    }).save();


    const items = await this.store.findAll('item');

    await Promise.all([
      this.addItems(items, koddigeKlussers),
      this.addItems(items, bonteBoerderij),
      this.addItems(items, professorBolleboos)
    ]);
  }

  addItems(items, initiative) {
    return Promise.all(items.map((item) => {
      const rng = Math.floor(Math.random() * 5);
      if (rng >= 2 && !item.container) {
        return this.store.createRecord('reservation', {
          item,
          initiative: initiative,
          quantity: rng - 1
        }).save();
      } else {
        return Promise.resolve();
      }
    }));
  }
}
