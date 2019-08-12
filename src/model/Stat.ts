export default class Stat {
  stat: string
  values: Array<number>
  min: Array<number>
  max: Array<number>

  constructor(stat: string, values: Array<number>) {
    this.stat = stat;
    this.values = values;
  }

  // If we have multiple of the same stat, we want to display only one line for that stat.
  // flatten is used to combine duplicate status into a single cumulative stat.
  static flatten(stats: Array<Stat>): Array<string> {
    // Sum all of the stats together.
    const all: {[index:string]: Array<number>} = {};
    stats.forEach(({stat, values}) => {
      if (stat in all) {
        all[stat] = all[stat].map((v, i) => v + values[i]);
      } else {
        all[stat] = values;
      }
    });

    // Stringify each of them.
    return Object.keys(all).map((stat) => new Stat(stat, all[stat]).toString());
  }

  roll() {
    this.values = this.values.map((v, i) => Math.floor(Math.random() * this.max[i] + 1) + this.min[i])
  }

  equals(stat: Stat): boolean {
    return this.stat === stat.stat;
  }

  toString() {
    let result = this.stat;
    this.values.forEach((v) => result.replace("#", v.toString()));
    return result;
  }
}
