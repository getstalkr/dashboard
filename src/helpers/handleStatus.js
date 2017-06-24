// --[ Helpers ]---------------------------------------------------------------

/*~
 * name: handleStatus
 *
 * description: Resolve/Reject based on HTTP status code
 *
 * stability: stable
 *
 * params:
 * - response :: The response whose status needs to be handled
 *
 * type: |
 *    response: Response => Promise<Response, Error>;
 */

const handleStatus = (response) =>
  (response.status >= 200 && response.status < 300)
    ? Promise.resolve(response)
    : Promise.reject(new Error(response.statusText))

export { handleStatus };
