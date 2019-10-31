// helper fn to determine a values type
module.exports = value => {
  if (value === null) return "Null";
  if (value === undefined) return "Undefined";
  return Object.prototype.toString.call(value).slice(8, -1);
};