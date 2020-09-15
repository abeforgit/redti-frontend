import { tracked } from "@glimmer/tracking";
import Service from "@ember/service";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";

export default class ItemManagerService extends Service {
  @service store;

  async transfersForLocation(locationId) {
    let inbox = await this.store.query("transfer", {
      filter: {
        to: locationId,
      },
    });
    let outbox = await this.store.query("transfer", {
      filter: {
        from: locationId,
      },
    });
    return { inbox, outbox };
  }

  async reparent(childId, parentId) {
    if (childId === parentId) return;
    let child = await this.store.findRecord("item", childId);
    let parent = await this.store.findRecord("item", parentId);
    child.parent = parent;
    await child.save();
  }
  async transferItem(itemId, locationId) {
    let item = await this.store.findRecord("item", itemId);
    let location = await this.store.findRecord("location", locationId);
    let newTransfer = this.store.createRecord("transfer", {
      item,
      to: location,
      from: item.currentLocation,
      on: new Date().toISOString(),
    });
    await newTransfer.save();
    item.currentLocation = location;
    await item.save();
  }
}
