import axios from "axios";

const deleteArticle = async (id) => {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `http://localhost:4000/api/article/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const response = await axios.request(config);
  return response;
};

export default deleteArticle;
