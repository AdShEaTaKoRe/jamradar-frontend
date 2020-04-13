// Define the URLs for our different routes
const baseURL = "http://localhost:3000";
const signInURL = `${baseURL}/sign-in`;
const validateURL = `${baseURL}/validate`;
const signUpUrl = `${baseURL}/sign-up`;
const deleteUrl = `${baseURL}/destroy`;
const userUrl = `${baseURL}/users`
let genres = [];
let instruments = [];

const request = (method, url, data, token) => {
  const configurationObject = {
    method,
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
}

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

const signIn = (data,cb) => {
  return request("POST",signInURL, data).then(cb);
};

const signUp = data => {
  return request("POST",signUpUrl, data);
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

const submitNewUser = (user) => {
  return request("POST", userUrl, user);
};

const submitQuestionnaire = (user, token) => {
  const userPreferences = {...user}
  userPreferences.match_instrument = userPreferences.match_instrument.join(",")
  userPreferences.match_genre = userPreferences.match_genre.join(",")
  return request("POST", "http://localhost:3000/user_question_details", userPreferences, token);
};

const getUserPreferences = token => {
  return get("http://localhost:3000/user_question_details", token);
};


const getCandidates = token => {
  return get("http://localhost:3000/candidates", token);
}

const getUserDetails = token => {
  return get(userUrl, token)
  
}

const updateUser = (user, token) => {
  return request("PUT", userUrl, user, token)
}

const deleteData = (token) => {
  return fetch(deleteUrl, {
    method: 'delete'
  }, token)
  .then(response => response.json());
}

const likeUser = (likedUserId, token) => {
  return request("POST", baseURL + '/like', likedUserId, token)
}

const getMatches = (token) => {
  return get(baseURL + '/matches', token)
}



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
  likeUser
};
