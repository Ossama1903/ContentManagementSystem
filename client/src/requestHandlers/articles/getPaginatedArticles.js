import axios from "axios";

const getPaginateArticles = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/api/article",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const response = await axios.request(config);
  return response;
};

export default getPaginateArticles;
