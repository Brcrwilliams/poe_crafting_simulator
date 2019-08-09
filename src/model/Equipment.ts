import Item from "./Item";
import Modifier from "./Modifier";

export default class Equipment extends Item {
  base: string
  type: string
  rarity: string
  implicit: Array<Modifier>
  prefixes: Array<Modifier>
  suffixes: Array<Modifier>
  crafted: Array<Modifier>
  isShaper: boolean
  isElder: boolean

  static fromJSON(json: any): Equipment {
    const e = <Equipment> super.fromJSON(json);
    e.base = json.base;
    e.type = json.type;
    e.rarity = "normal";
    e.implicit = new Array<Modifier>();
    e.prefixes = new Array<Modifier>();
    e.suffixes = new Array<Modifier>();
    e.crafted = new Array<Modifier>();
    return e;
  }
}
