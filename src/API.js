// Define the URLs for our different routes
const baseURL = "http://localhost:3001"
const signInURL = `${baseURL}/sign-in`
const validateURL = `${baseURL}/validate`
const signUpUrl = `${baseURL}/sign-up`


const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(url, configurationObject)
}

const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url)
}


const validate = token => {
  return get(validateURL, token).then(response => response.json())
}

const signIn = data => {
  return post(signInURL, data).then(response => response.json())
}

const signUp = data => {
  return post(signUpUrl, data).then(response => response.json())
}


// Export the necessary functions as part of one object which we will import elsewhere
export default { signIn, validate, signUp }