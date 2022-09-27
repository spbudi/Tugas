export const Pi = 22 / 7;
export default class MesinHitung {
  constructor(n) {
    this.x = 1;
  }
  add(n) {
    this.x += n;
    return this;
  }
  substract(n) {
    this.x -= n;
    return this;
  }
  multiply(n) {
    this.x *= n;
    return this;
  }
  divide(n) {
    this.x /= n;
    return this;
  }
  square() {
    this.x = Math.pow(this.x, 2);
    return this;
  }
  exponent(n) {
    this.x = Math.pow(this.x, n);
    return this;
  }
  squareRoot() {
    this.x = Math.sqrt(this.x);
    return this;
  }
  result() {
    console.log(this.x);
  }
}
