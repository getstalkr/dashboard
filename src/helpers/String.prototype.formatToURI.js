String.prototype.formatToURI = function (...args) {
  let i = 0;
  return this.replace(/{}/g, () => args[i] !== "undefined" ? args[i++] : "");
};
