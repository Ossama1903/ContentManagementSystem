import axios from "axios";

const updateArticle = async (id, title, content) => {
  let data = JSON.stringify({
    title,
    content,
  });

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `http://localhost:4000/api/article/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data,
  };

  const response = await axios.request(config);
  return response;
};

export default updateArticle;
