const ROOT_API_URL = process.env.REACT_APP_ROOT_PATH;
/* global fetch */
debugger

export const api = {
  get: (path) => {
    debugger
    return new Promise((resolve, reject) => {
      return fetch(`${ROOT_API_URL}${path}`)
        .then(resp => resp.json())
        .then(resp => resolve(resp))
        .catch(error => reject(error))
    })

  }
}