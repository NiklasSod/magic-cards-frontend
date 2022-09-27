import axios from "axios";

if (localStorage.token) {
  axios.defaults.headers.common = { Token: localStorage.token };
}

if (localStorage.adminToken) {
  axios.defaults.headers.common = { adminToken: localStorage.token };
}

export default axios;
