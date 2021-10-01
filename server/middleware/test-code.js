const a = {
  b: 22,
  c: () => {
    return this.b;
  },
  d: function () {
    return this.b + 44;
  }
};
const d = a.c.call(a);
console.log(d)
console.log(a.d());

