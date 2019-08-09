import Equipment from "./Equipment";

export default class Weapon extends Equipment {
  physicalDamageMin: number
  physicalDamageMax: number
  criticalStrikeChance: number
  attacksPerSecond: number
}
