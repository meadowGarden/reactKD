import axios from "axios";
import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const Posts_API = () => {
  const [postsArr, setPostsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPostsArr(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  //   console.log("posts array", postsArr);

  const postsToDisplay = postsArr.map((post) => (
    <SinglePost key={post.id} post={post} />
  ));

  if (isLoading) {
    return <>data is loading, please wait...</>;
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    textAlign: "center",
  };

  return (
    <>
      <div style={gridStyle}>{postsToDisplay}</div>
    </>
  );
};

export default Posts_API;
