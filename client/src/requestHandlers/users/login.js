import axios from "axios";

const login = async (username, password) => {
  try {
    const data = JSON.stringify({
      username,
      password,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.error || "Login failed");
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export default login;
