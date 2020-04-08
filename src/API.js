// Define the URLs for our different routes
const baseURL = "http://localhost:3000";
const signInURL = `${baseURL}/sign-in`;
const validateURL = `${baseURL}/validate`;
const signUpUrl = `${baseURL}/sign-up`;
let genres = [];
let instruments = [];

const post = (url, data, token) => {
  const configurationObject = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  if (token) {
    configurationObject.headers.Authorization = token;
  }
  return fetch(url, configurationObject).then(response => response.json());
};

const get = (url, token) => {
  return token
    ? fetch(url, { headers: { AUTHORIZATION: token } }).then(response =>
        response.json()
      )
    : fetch(url).then(response => response.json());
};

const validate = token => {
  return get(validateURL, token);
};

const signIn = data => {
  return post(signInURL, data);
};

const signUp = data => {
  return post(signUpUrl, data);
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

const submitNewUser = (user, token, cb) => {
  post("http://localhost:3000/users", user, token).then(cb);
};

const submitQuestionnaire = (user, token) => {
  const userPreferences = {...user}
  userPreferences.match_instrument = userPreferences.match_instrument.join(",")
  userPreferences.match_genre = userPreferences.match_genre.join(",")
  return post("http://localhost:3000/user_question_details", userPreferences, token);
};

const getUserPreferences = token => {
  return get("http://localhost:3000/user_question_details", token);
};

const getMatches = token => {
  return get("http://localhost:3000/users", token);
}

const getCandidates = token => {
  return get("http://localhost:3000/candidates", token);
}

const getUserForEdit = token => {
  return get("http://localhost:3000/user/")
}

// Export the necessary functions as part of one object which we will import elsewhere
export default {
  signIn,
  validate,
  signUp,
  getGenres,
  getInstruments,
  init,
  submitNewUser,
  submitQuestionnaire,
  getUserPreferences,
  getMatches,
  getCandidates
};
