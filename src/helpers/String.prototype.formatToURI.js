// --[ Helpers ]---------------------------------------------------------------

/*~
 * name: formatToURI
 *
 * description: Reads the arguments passed to it and replaces `{ }` with them
 *
 * stability: stable
 *
 * params:
 * - args :: Paths to be placed over `{ }`
 *
 * type: |
 *    TODO
 */

String.prototype.formatToURI = function (...args) {
  let i = 0;
  return this.replace(/{}/g, () => args[i] !== "undefined" ? args[i++] : "");
};
