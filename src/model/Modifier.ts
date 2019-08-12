import Stat from "./Stat";
import Equipment from './Equipment';

export default class Modifier {
  tier: number
  name: string // ex: "of Calming"
  appliesTo: string // Equipment type
  group: string // One item cannot have two mods of the same group
  reqLevel: number
  type: string // Prefix, suffix
  stats: Array<Stat>

  constructor(tier: number, ...stats: Array<Stat>) {
    this.tier = tier;
    this.stats = stats;
  }

  private static countAffix(affixes: Array<Modifier>, type: string): number {
    let sum = 0;
    affixes.forEach((a) => {
      if (a.type === type) {
        sum += 1;
      }
    });
    return sum
  }

  static countPrefixes(affixes: Array<Modifier>): number {
    return Modifier.countAffix(affixes, "prefix");
  }

  static countSuffixes(affixes: Array<Modifier>): number {
    return Modifier.countAffix(affixes, "suffix");
  }

  roll() {
    this.stats.forEach((stat) => stat.roll());
  }

  // Checks if a new mod obeys "da rules" on whether or not it can be added to an item.
  canApplyTo({affixes, type, level}: Equipment): boolean {
    // Has to be able to apply to this equipment type.
    // Hopefully this code path never gets traveled...
    if (this.appliesTo !== type) {
      return false;
    }

    // Must meet the level requirement.
    if (level < this.reqLevel) {
      return false;
    }

    // Can have no more than three prefixes.
    if (this.type === "prefix" && Modifier.countPrefixes(affixes) > 2) {
      return false;
    }

    // Can have no more than three suffixes.
    if (this.type === "suffix" && Modifier.countSuffixes(affixes) > 2) {
      return false;
    }

    // No mods of the same group.
    if (affixes.some((a) => a.group === this.group)) {
      return false;
    }

    return true;
  }
}
