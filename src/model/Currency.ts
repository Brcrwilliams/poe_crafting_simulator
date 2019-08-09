import Item from "./Item";
import Equipment from "./Equipment";
import data from "../data/currency.json";

export default class Currency extends Item {
  name: string
  stackSize: number
  effect: string
  targetRarities: Array<string>
  positionLeft: string
  positionTop: string
  quantity: number

  static fromJSON(input: any): Currency {
    const c = new Currency();
    c.name = input.name;
    c.assetPath = require(`@/assets/currency/${input.asset}`);
    c.stackSize = input.stackSize;
    c.effect = input.effect;
    c.targetRarities = input.targetRarities;
    c.positionLeft = input.positionLeft;
    c.positionTop = input.positionTop;
    c.gridSize = "1x1";
    
    // TODO: Figure out a different way to initialize this.
    c.quantity = c.stackSize
    return c
  }

  static load(): Array<Currency> {
    return data.map(this.fromJSON)
  }

  consume() {
    if (this.quantity > 0) {
      this.quantity = this.quantity - 1;
    }
  }

  canApplyTo(equip: Equipment): boolean {
    return this.targetRarities.includes(equip.rarity);
  }
}
