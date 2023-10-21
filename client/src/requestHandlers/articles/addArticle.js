import axios from "axios";

const addArticle = async (title, content, author) => {
  let data = JSON.stringify({
    title,
    content,
    author,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/api/article",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data,
  };

  const response = await axios.request(config);
  return response;
};

export default addArticle;
