import axios from "axios";

const verifyToken = async (token) => {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/user/verify-token",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(config);

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(response.data.error || "Token verification failed");
    }
  } catch (error) {
    throw new Error("An error occurred during token verification");
  }
};

export default verifyToken;
