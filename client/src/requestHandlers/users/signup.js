import axios from "axios";

const signup = async (username, email, password) => {
  let data = JSON.stringify({
    username,
    email,
    password,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/api/user/signup",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = axios.request(config);
  return response;
};

export default signup;
