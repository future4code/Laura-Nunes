import React, { useEffect, useState } from "react";
import useProtectPage from "../hooks/useProtectedPage";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import PostCard from "../components/PostCard";
import styled from "styled-components";
import { axiosConfig } from "../constants/axiosConfig";

const FeedWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
`;

const FeedPage = () => {
  useProtectPage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
    .get(`${BASE_URL}/posts`, axiosConfig)
    .then((res) => {
      setPosts(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <FeedWrapper>
      {loading && <progress />}
      {posts.map((post) => {
        return <PostCard key={post.id} id={post.id} post={post} />;
      })}
    </FeedWrapper>
  );
};

export default FeedPage;
