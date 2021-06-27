import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { axiosConfig } from "../constants/axiosConfig";
import { BASE_URL } from "../constants/urls";
import useProtectedPage from "../hooks/useProtectedPage";
import CardComment from "../components/CardComment";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const PostDetailsPage = (props) => {
  useProtectedPage();
  const params = useParams();
  const history = useHistory();
  const [postDetails, setPostDetails] = useState(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!params.postId) {
      history.push("/feed");
    }
  }, []);

  useEffect(() => {
    fetchPostDetails();
  }, []);

  const fetchPostDetails = () => {
    axios
      .get(`${BASE_URL}/posts/${params.postId}/comments`, axiosConfig)
      .then((res) => {
        setPostDetails(res.data);
      });
  };

  const handleNewComment = (e) => {
    setNewComment(e.target.value);
    fetchPostDetails();
  };

  const handleCreateComment = async () => {
    const body = {
      body: newComment,
    };
    try {
      await axios.post(
        `${BASE_URL}/posts/${params.postId}/comments}`,
        axiosConfig,
        body
      );
      setNewComment("");
      fetchPostDetails();
    } catch (err) {
      alert("Não foi possível comentar, tente novamente");
    }
  };
  return (
    <div>
      {/* { postDetails !==null && <PostCard />}
        {postDetails && postDetails.map((post) => {
            return (<p>{post.body}</p>)
        })} */}
      {postDetails !== null &&
        postDetails.map((post) => {
          return <CardComment key={post.id} id={post.id} post={post} />;
        })}
      <TextField
        placeholder={"Seu comentário"}
        value={newComment}
        onChange={handleNewComment}
      />
      <Button onClick={handleCreateComment}>Comentar</Button>
    </div>
  );
};
export default PostDetailsPage;
