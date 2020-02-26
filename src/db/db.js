import axios from "axios";
const connectDB = async () => {
  let res = axios.get("htps://api.github.com/user");
  let data = res.data;
  console.log(data);
};

export { connectDB as default };
