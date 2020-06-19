// Define the URLs for our different routes

  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://jamradar.herokuapp.com"
      : "http://localhost:3000";


const signInURL = `${baseURL}/sign-in`;
const validateURL = `${baseURL}/validate`;
const signUpUrl = `${baseURL}/sign-up`;
const userUrl = `${baseURL}/users`;
let genres = [];
let instruments = [];

const request = (method, url, data, token) => {
  const configurationObject = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  if (token) {
    configurationObject.headers.Authorization = token;
  }
  return fetch(url, configurationObject).then((response) => response.json());
};

const submitPost = (formData) => {
  const config = {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      Accept: "application/json",
    },
    body: formData,
  };
  return fetch(userUrl, config).then((res) => res.json());
};

const get = (url, token) => {
  return token
    ? fetch(url, { headers: { AUTHORIZATION: token } }).then((response) =>
        response.json()
      )
    : fetch(url).then((response) => response.json());
};

const validate = (token) => {
  return get(validateURL, token);
};

const signIn = (data, cb) => {
  return request("POST", signInURL, data).then(cb);
};

const signUp = (data) => {
  return request("POST", signUpUrl, data);
};

const getGenres = () => {
  return genres;
};
const getInstruments = () => {
  return instruments;
};

const init = () => {
  fetch(`${baseURL}/genres`)
    .then((response) => response.json())
    .then((json) => (genres = json));
  fetch(`${baseURL}/instruments`)
    .then((response) => response.json())
    .then((json) => (instruments = json));
};

const submitNewUser = (user) => {
  return request("POST", signUpUrl, user);
};

const submitQuestionnaire = (user, token) => {
  const userPreferences = { ...user };
  userPreferences.match_instrument = userPreferences.match_instrument.join(",");
  userPreferences.match_genre = userPreferences.match_genre.join(",");
  return request(
    "POST",
    `${baseURL}/user_question_details`,
    userPreferences,
    token
  );
};

const getUserPreferences = (token) => {
  return get(`${baseURL}/user_question_details`, token);
};

const getCandidates = (token) => {
  return get(`${baseURL}/candidates`, token);
};

const getUserDetails = (token) => {
  return get(userUrl, token);
};

const updateUser = (user, token) => {
  return request("PUT", userUrl, user, token);
};

const deleteData = (token) => {
  return request("DELETE", userUrl, null, token);
};

const likeUser = (likedUserId, token) => {
  return request("POST", baseURL + "/like", likedUserId, token);
};

const getMatches = (token) => {
  return get(baseURL + "/matches", token);
};

const deleteMatch = (unmatchedUserId, token) => {
  return request(
    "DELETE",
    baseURL + "/matches",
    { liked_user: unmatchedUserId },
    token
  );
};

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
  getCandidates,
  getUserDetails,
  deleteData,
  updateUser,
  likeUser,
  deleteMatch,
  submitPost,
};
