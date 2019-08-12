import Item from "./Item";
import Modifier from "./Modifier";

export default class Equipment extends Item {
  base: string
  type: string
  rarity: string
  level: number
  implicit: Array<Modifier>
  affixes: Array<Modifier>
  crafted: Array<Modifier>
  isShaper: boolean
  isElder: boolean

  static fromJSON(json: any): Equipment {
    const e = new Equipment();
    e.base = json.base;
    e.type = json.type;
    e.rarity = "normal";
    e.implicit = new Array<Modifier>();
    e.affixes = new Array<Modifier>();
    e.crafted = new Array<Modifier>();
    e.gridSize = json.gridSize;
    return e;
  }

  getBackgroundClass(): string {
    if (this.isShaper) {
      return `shaper-${this.gridSize}`;
    }

    if (this.isElder) {
      return `elder-${this.gridSize}`;
    }

    return "";
  }
}
