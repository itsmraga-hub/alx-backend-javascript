export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  customStringRepresentation() {
    return `Airport [${this.code}] { _name: '${this.name}', _code: '${this.code}'}`;
  }

  toString() {
    return `[Object ${this.code}]`;
  }

  get [Symbol.toStringTag]() {
    return `${this.code}`;
  }
}
