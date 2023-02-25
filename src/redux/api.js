import axios from "axios";

export const loadData = async () => {
  await axios.get("https://jsonplaceholder.typicode.com/posts");
};
