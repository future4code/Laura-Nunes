import React, { useEffect, useState } from "react";
import useProtectPage from "../hooks/useProtectedPage";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import PostCard from "../components/PostCard";

const FeedPage = () => {
  useProtectPage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    setLoading(true);
    axios.get(`${BASE_URL}/posts`, axiosConfig).then((res) => {
      setPosts(res.data);
      console.log(res.data)
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <progress />}
      {posts.map((post) => {
        return (<PostCard post={post}/>)
      })}
    </div>
  );
};

export default FeedPage;
