import Equipment from "./Equipment";
import data from "../data/weapons.json";

export default class Weapon extends Equipment {
  physicalDamageMin: number
  physicalDamageMax: number
  criticalStrikeChance: number
  attacksPerSecond: number
  weaponRange: number

  private static assetDir(type: string) {
    return type.replace(/\s/g, "");
  }

  static fromJSON(json: any): Weapon {
    const w = <Weapon> super.fromJSON(json);
    w.physicalDamageMin = json.physicalDamageMin;
    w.physicalDamageMax = json.physicalDamageMax;
    w.criticalStrikeChance = json.criticalStrikeChance;
    w.attacksPerSecond = json.attacksPerSecond;
    w.weaponRange = json.weaponRange;
    const dir = this.assetDir(w.type);
    w.assetPath = require(`@/assets/equipment/${dir}/${json.asset}`);

    w.isShaper = true;
    return w;
  }

  static load(): Array<Weapon> {
    return data.map((v) => this.fromJSON(v));
  }
}
