import axios from "axios";

const fetchTours = async () => {
  const res = await axios.get("http://localhost:3000/tours");
  console.log(res.data);
  //   return res.data.sort((a, b) => a.name - b.name);
  return res.data;
};

export { fetchTours };
