const handleStatus = (response) =>
  (response.status >= 200 && response.status < 300)
    ? Promise.resolve(response)
    : Promise.reject(new Error(response.statusText))

export { handleStatus };
