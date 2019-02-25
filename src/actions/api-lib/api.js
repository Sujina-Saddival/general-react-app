const ROOT_API_URL = 'http://localhost:8080';

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