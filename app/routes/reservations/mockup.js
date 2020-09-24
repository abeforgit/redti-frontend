import Route from '@ember/routing/route';

export default class ReservationsMockupRoute extends Route {
  async model() {
    return {
      locations: [
        "De Sleutelbloem, Brecht",
        "De Octopus, Sint-Katelijne Waver",
        "De Zuivelfabriek Van Hollebeke, Ieper",
        "De Hagaard, Overijse"
      ],
      items: {
        perLocatie: [
          {
            name: "Verkleedkoffer",
            amount: 1
          },
          {
            name: "Bekerbak (35 bekers)",
            amount: 1
          },
          {
            name: "Afwasbakjes",
            amount: 5
          }
        ],
        verfkoffer: [
          {
            name: "Bus gele verf",
            amount: 1
          },
          {
            name: "Bus blauwe verf",
            amount: 1
          },
          {
            name: "Bus rode verf",
            amount: 1
          },
          {
            name: "Penseel",
            amount: 25
          }
        ],
        basiskoffer: [
          {
            name: "Doos alcoholstiften (8)",
            amount: 1
          },
          {
            name: "Pak wit A4-papier (50)",
            amount: 1
          },
          {
            name: "Doos scharen (2 grote + 25 kleine)",
            amount: 1
          }
        ],
        catalogus: [
          {
            code: "KS27",
            name: "Bingo",
            amount: 1
          },
          {
            code: "GS6",
            name: "Eenwieler",
            amount: 2
          }
        ]
      }
    }
  }
}
