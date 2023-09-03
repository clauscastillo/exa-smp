import axios from "axios";
import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/teams")
      .then((res) => console.log(res.data));
  });
  return <div>Test</div>;
};

export default Test;
