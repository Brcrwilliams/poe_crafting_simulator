import ModValue from "./ModValue";

export default class Modifier {
  text: string
  tier: number
  values: Array<ModValue>

  constructor(text: string, tier: number, ...values: Array<ModValue>) {
    this.text = text;
    this.tier = tier;
    this.values = values;
  }

  toString() {
    let result = this.text;
    this.values.forEach((v) => result = result.replace("#", v.toString()));
    return result;
  }

  roll() {
    this.values.forEach((v) => v.roll());
  }
}
