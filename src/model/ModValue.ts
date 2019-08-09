export default class ModValue {
  value: number
  minValue: number
  maxValue: number

  constructor(value: number, minValue: number, maxValue: number) {
    this.value = value;
    this.minValue = minValue;
    this.maxValue = maxValue;
  }

  roll() {
    this.value = Math.floor(Math.random() * this.maxValue + 1) + this.minValue;
  }

  toString() {
    return this.value.toString();
  }
}
