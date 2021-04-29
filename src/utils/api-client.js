const NASA_API = 'https://eonet.sci.gsfc.nasa.gov/api/v3'

async function client(endpoint) {
  return fetch(`${NASA_API}/${endpoint}`).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export {client}
