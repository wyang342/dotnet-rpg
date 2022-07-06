import jwt_decode from "jwt-decode";

const getUser = () => {
  const jwt = getJWT();
  if (jwt != null) {
    return jwt_decode(localStorage.getItem("jwt")).unique_name;
  }

  return null;
};

const getJWT = () => {
  return localStorage.getItem("jwt");
};

const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

export { getUser, getJWT, logout };
