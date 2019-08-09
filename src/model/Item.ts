export default class Item {
  name: string
  assetPath: string
  gridSize: string

  static fromJSON(json: any): Item {
    const i = new Item();
    i.name = json.name;
    i.gridSize = json.gridSize;
    return i;
  }
}
