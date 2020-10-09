import Route from '@ember/routing/route';

export default class ReservationsMockupRoute extends Route {
  async model() {
    return {
      initiatives: [
        "Speelweek Dappere Doe-Het-Zelvers",
        "Kleuterspeelweek Poppenkast",
        "18+ Kamp",
        "Instructeurscursus"
      ],
      items: {
        perLocatie: [
          {
            name: "Verkleedkoffer",
            amount: 0
          },
          {
            name: "Bekerbak (35 bekers)",
            amount: 0
          },
          {
            name: "Afwasbakjes",
            amount: 0
          }
        ],
        basiskoffer: [
          {
            name: "Doos alcoholstiften (8)",
            amount: 0
          },
          {
            name: "Pak wit A4-papier (50)",
            amount: 0
          },
          {
            name: "Doos scharen (2 grote + 25 kleine)",
            amount: 0
          }
        ],
        gadgets: [
          {
            name: "Gadget Kleuters",
            amount: 0
          },
          {
            name: "Gadget Lager",
            amount: 0
          }
        ],
        catalogus: [
          {
            code: "KS27",
            name: "Bingo",
            amount: 0
          },
          {
            code: "GS6",
            name: "Eenwieler",
            amount: 0
          }
        ]
      }
    }
  }
}
