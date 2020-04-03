// Define the URLs for our different routes
const baseURL = "http://localhost:3000";
const signInURL = `${baseURL}/sign-in`;
const validateURL = `${baseURL}/validate`;
const signUpUrl = `${baseURL}/sign-up`;
let genres = [];
let instruments = [];

const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  return fetch(url, configurationObject);
};

const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url);
};

const validate = token => {
  return get(validateURL, token).then(response => response.json());
};

const signIn = data => {
  return post(signInURL, data).then(response => response.json());
};

const signUp = data => {
  return post(signUpUrl, data).then(response => response.json());
};

const getGenres = () => {
  return genres;
};
const getInstruments = () => {
  return instruments;
};

const init = () => {
  fetch("http://localhost:3000/genres")
    .then(response => response.json())
    .then(json => (genres = json));
  fetch("http://localhost:3000/instruments")
    .then(response => response.json())
    .then(json => (instruments = json));
};

const submitNewUser = (user, cb) => {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body:JSON.stringify(user)
  })
  .then(cb)
}

const submitNewMatchDetails = (user, cb) => {
  fetch("http://localhost:3000/user_question_details", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body:JSON.stringify(user)
  })
  .then(cb)
}



// Export the necessary functions as part of one object which we will import elsewhere
export default { signIn, validate, signUp, getGenres, getInstruments, init ,submitNewUser, submitNewMatchDetails };
