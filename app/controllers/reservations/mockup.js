import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import {action} from "@ember/object";

export default class ReservationsMockupController extends Controller {
  @tracked
  itemsToDisplay = {...this.model.items};

  @action
  async addCatalogusItem() {
    this.itemsToDisplay.catalogus.push({
      code: "PM5",
      name: "Voorhamer",
      amount: 1
    });
    // This is necessary to trigger the @tracked...
    this.itemsToDisplay = this.itemsToDisplay;
    console.log(this.model.locations)
  }

  @action
  async kleutersTemplate() {
    this.itemsToDisplay = {
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
      gadgets: [
        {
          name: "Gadget Kleuters",
          amount: 1
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
        },
        {
          code: "Kleuters",
          name: "Inclusiekoffer",
          amount: 1
        }
      ]
    }
  }

  @action
  async lagerTemplate() {
    this.itemsToDisplay = {
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
      gadgets: [
        {
          name: "Gadget Kleuters",
          amount: 0
        },
        {
          name: "Gadget Lager",
          amount: 1
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
        },
        {
          code: "Lager",
          name: "Inclusiekoffer",
          amount: 1
        }
      ]
    }
  }
}
